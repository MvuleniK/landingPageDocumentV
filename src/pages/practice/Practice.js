import DStorage from '../../components/abis/DStorage.json'
import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Main from  '../../components/Main';
import { Buffer } from 'buffer';
import Web3 from 'web3';
// import './App.css';

const INFURA_ID = "2GM9JzqHaCOYjYViRkzTg3F8loD";
const INFURA_SECRET_KEY = "24ceeea239a51d0e068d20801dfc22d3";
const auth =
    'Basic ' + Buffer.from(INFURA_ID + ':' + INFURA_SECRET_KEY).toString('base64');

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ 
    host: 'ipfs.infura.io', 
    port: 5001, 
    protocol: 'https',
    headers: {
      authorization: auth,
  },
  })

class Practice extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    console.log(accounts);
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    console.log(networkId);
    const networkData = DStorage.networks[networkId];
    console.log(DStorage.networks);
    if (1) {
      // Assign contract
      const dstorage = new web3.eth.Contract(
        DStorage.abi, '0x4281ecf07378ee595c564a59048801330f3084ee', //Wallet address
        {
          from: '0xc159d5550f19b54c180d9ca4c52f7db24083220e', //Contract address
        });
      this.setState({ dstorage })
      // Get files amount
      const filesCount = await dstorage.methods.fileCount().call()
      this.setState({ filesCount })
      // Load files&sort by the newest
      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call()
        this.setState({
          files: [...this.state.files, file]
        })
      }
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
  }

  // Get file from user
  captureFile = event => {
    event.preventDefault()

    const file = event.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        type: file.type,
        name: file.name
      })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadFile = description => {
    console.log("Submitting file to IPFS...")

    // Add file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result.size)
      if (error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      // Assign value for the file without extension
      if (this.state.type === '') {
        this.setState({ type: 'none' })
      }
      this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, this.state.type, this.state.name, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({
          loading: false,
          type: null,
          name: null
        })
        window.location.reload()
      }).on('error', (e) => {
        window.alert('Error')
        this.setState({ loading: false })
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dstorage: null,
      files: [],
      loading: false,
      type: null,
      name: null
    }
    this.uploadFile = this.uploadFile.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        {this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
          : <Main
            files={this.state.files}
            captureFile={this.captureFile}
            uploadFile={this.uploadFile}
          />
        }
      </div>
    );
  }
}

export default Practice;
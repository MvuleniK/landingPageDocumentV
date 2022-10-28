
import React,{useState, useEffect}from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
// import Navbar from '../../components/navbar/Navbar'
import { WelcomeCard,UplaodToBlockchainBoxes,DisplayUplaodTable,SelectBox} from "../../component/upload/uplaodload"
import "./index.css";
import IconUser from "../../imagess/userIconImage.svg";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GridViewIcon from '@mui/icons-material/GridView';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import welcomeIMG from "../../imagess/welcomeIMG.svg";
import CalenderBox from "../../component/calander/calenderBox";
import Web from 'web3';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { nanoid } from 'nanoid';


const DashBoardPage = () => {
  const [loggInState,setloggInState]=useState(false);
  const auth=getAuth();
  const [selectFile,setSelectFile]=useState([]);

  
  const handleCalander=(minusDays=0)=>{
    const selectMonth = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const date=new Date();
  //get day of the month
  const day=date.getDate();
  const week=date.getDay();
  const year=date.getFullYear();
  const month=selectMonth[date.getMonth()];
  return ` ${month} ${(day-minusDays)}, ${year}`;
};
handleCalander();


const navigate=useNavigate();
const handleLogOut=()=>{
  signOut(auth);
  setloggInState(false);
  navigate("/")
}
const hanleSelectFile=(e)=>{
  console.log(e.target.files[0]);
  const file=Object.assign(e.target.files[0]);
  file.identifyBtn=nanoid();
  setSelectFile(item=>[...item,file]);
};


return (
  
  <div className="pageGrid" 
  style={{width:`100vw`,height:"100vh"}}>
      <div className='item1'>
    
      <nav>
 

        <ul>

<div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>

      <img src={IconUser} alt="default user icon Image"
       style={{width:"8rem",height:"8rem",backgroundColor:"white",borderRadius:"100%"}}/>
<div>
  <h2>Sarah Cannar</h2>
<h4>Sarah@gmail.com</h4>
</div>
       </div>

<br/>
  <ul  className='navLI'
  style={{display:"flex", flexDirection:"column",width:'100%',
  height:"35rem"}}>
    <Link to="/Dashboard"> <li><GridViewIcon fontSize="large"/> Dashboard</li></Link>
  <Link to="/"><li><HomeIcon fontSize="large"/>Analytics</li></Link>
  <Link to="/About"> <li><InfoIcon fontSize="large"/> Task List</li></Link>
  <Link to="/profile"> <li> <AccountBoxIcon fontSize='large'/>Tracking</li></Link>
  <Link to="/Plan"> <li> <AirplanemodeActiveIcon fontSize='large'/>Setting</li></Link>
  </ul>

    </ul>

   </nav>
   <div 
   style={{position:"absolute",
   width:"0.1rem",top:"5rem",right:"0",height:"75rem",
   backgroundColor:"lightgray"}}></div>
<div className='wave'></div>
<div className='wave2'></div>

      </div>
    <div className='item2'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-end"}}>

   
      <div style={{flexGrow:"2",color:"rgba(121,50,128)",fontSize:"1.5rem"}}>
      <h3>Hello,Sara</h3>
      <h6>Today is Monday, 20 October 2022</h6>
      </div>
      <div style={{display:"flex",flexGrow:"3",padding:"0 0",textAlign:"center"}}>
        <input type="text" style={{width:"40rem",height:"4rem", borderRadius:"0.9rem"}}/>
        <SearchIcon fontSize="small"
      style={{height:"4rem",width:"4rem",cursor:"pointer", backgroundColor:"F7F5F2",color:"rgba(121,50,128)",borderRadius:"0.9rem"}} />
      
 
        <button 
        style={{width:"15rem",cursor:"pointer",height:"4rem",
        fontSize:"1.3rem",backgroundColor:"black",borderRadius:"0.5rem",
        marginRight:"1rem", color:"white"}} type="button" onChange={(e)=>hanleSelectFile(e)}> 
        <label htmlFor='filebtn'>Add New Project</label>
        
        <input id="filebtn" type="file"  style={{color:"rgba(0,0,0,0)"}}/>
          
        
        </button>
    
      </div>
      <div>
        {/* empty div for space dont remove*/}
      </div>
      </div>

        {/*  div for boxes*/}

<div>
  <UplaodToBlockchainBoxes/>
</div>
      </div>
    <div className='item3'>
      <div style={{}}>
      <DisplayUplaodTable selectFile={selectFile}/>
      </div>
      <div style={{}}>
      <img src={welcomeIMG} alt=" wecome to dashboard"/>
      </div>
    </div>

    <div className='item4'>
<div><h1>Calander</h1></div>
    <div className="calander">
      {/* clander divs*/}
      <CalenderBox handleCalander={handleCalander} minusDays={2}/>
      <CalenderBox handleCalander={handleCalander} minusDays={1}/>
      <CalenderBox handleCalander={handleCalander}/>
 
    </div>
    </div>
    </div>
  
  )
}


export default DashBoardPage
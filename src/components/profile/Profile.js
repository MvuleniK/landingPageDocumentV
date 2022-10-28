import React,{useState} from 'react';
import pic2 from '../images/old_man.png'
import './profile.css';
import {FiImage} from 'react-icons/fi';
import Navbar from '../Navbar';
import {firebase} from '../../firebase';

const Profile=()=> {
    const [users,setRoom] = useState({name:'' ,email:'',phone:'',image:'', surname:'',professional:'',publicKey:''});
    const db = firebase.firestore();
    const handleChange = (event)=>{
        event.preventDefault();
        const {name,value} = event.target;
        setRoom((prev)=>{
            return{...prev,[name]:value};
        });
    }
    
    const addDoc = (event)=>{
        event.preventDefault();
        db.collection('users').add({
            name:users.name,
            email:users.email,
            phone:users.phone,
            image:users.image,
            surname:users.surname,
            userProfession:users.professional,
            userPublickey:users.publicKey
        })
        .then((docRef)=>{
            const docId = docRef.id;
            console.log(docId)
        }).catch((err)=>{
            console.log('Error'+err.message)
            alert('Error'+err.message)
        });
    };

  return (
    <div className='profile'>
        {/* <Navbar/> */}
            <div className='top-lane'>
                <h2>Profile</h2>
                <hr/>
            </div>
        <form className='picture-plus' onSubmit={addDoc}>
        <div className='picture-others'>
        <div className='profile-pic'>
            <img src={pic2}/>
        </div>
            <div className='spaces'>
            <label>
                Name
            </label>
            <br/>
            <br/>
            <input
            type='text'
            name='name'
            value={users.name}
            onChange={handleChange}
            />
            </div>
            <div className='spaces'>
            <label>
                Email
            </label>
            <br/>
            <br/>
            <input  type='text'
            name='email'
            value={users.email}
            onChange={handleChange}/>
            </div>
            <div className="button-wrap">
                <label className='button300' for="upload"><FiImage/>Upload</label>
                <input id="upload" type="file" value={users.image} name='image' onChange={handleChange}/>
             </div>
            </div>
            <div className='left-site'>
            <div className='spaces'>
            <label>
               Surname
            </label>
            <br/>
            <br/>
            <input  type='text'
            name='surname'
            value={users.surname}
            onChange={handleChange}/>
            </div>
            <div className='spaces'>
            <label>
                Phone Number
            </label>
            <br/>
            <br/>
            <input  type='text'
            name='phone'
            value={users.phone}
            onChange={handleChange}/>
            </div>
            <div className='spaces'>
            <label>
                Professional
            </label>
            <br/>
            <br/>
            <input  type='text'
            name='professional'
            value={users.professional}
            onChange={handleChange}/>
            </div>
            <div className='spaces'>
            <label>
                Public Key
            </label>
            <br/>
            <br/>
            <input  type='text'
            name='publicKey'
            value={users.publicKey}
            onChange={handleChange}/>
            </div>
            <div>
                <button className='saveBtn'>Save</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Profile
import React ,{useState}from 'react'
import TimePicker from "react-time-picker";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



const DisplayInput=({setDisplay,setTodosCalanders,todosCalanders,display,setDescription,description,value,Time})=>{
if(!display)setDescription("");


const handleacept=()=>{
    if(description=="")return alert("you have not inserted a description");
    setTodosCalanders(item=>[...todosCalanders,{
time:value,
description
    }]);
    alert("Succsessfull")
    setDisplay(!display)
}


    return (

<div style={{display:`${display?"block":"none"}`,position:"absolute",padding:"1rem",color:"gray",borderRadius:"1rem",
fontSize:"2.5rem",top:"2rem",width:"25rem", textAlign:"center",lineHeight:"4rem",
height:"20rem",backgroundColor:"lightgray",boxShadow:"5px 5px 10px white"}}>
    <TimePicker onChange={Time} value={value} />
    <br/>
    <label htmlFor='description'>Description</label>
    <br/>
    <input onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Enter description" type="text"
     style={{coloroutline:"none",padding:"1rem",fontSize:"1.5rem",border:"1px solid #793280",
     width:"20rem",height:"5rem",borderRadius:"1rem",boxShadow:"1px 1px 10px white"}}/>
     <br/>

     <button
      style={{width:"8rem",cursor:"pointer",
      height:"4rem",
      fontSize:"1.5rem",backgroundColor:"black",borderRadius:"1rem",
      marginRight:"1rem", color:"white"}} onClick={handleacept}>accept</button>

</div>
    )
}

const CalenderBox = ({handleCalander,minusDays}) => {
    const [value, Time]=useState("10:00");
    const [display,setDisplay]=useState(false)
    const [description,setDescription]=useState("");
    const colors=["#793280","#83D0D6","#FE7541"];
    const [todosCalanders,setTodosCalanders]=useState([])




  return (
    <div style={{height:"auto"}}>
    <div  style={{display:"flex", position:"relative",
    justifyContent:"space-evenly", alignItems:"center",fontSize:"1.1rem"}}>
      <h3>{handleCalander(minusDays)}</h3>
      <h4><MoreHorizIcon fontSize='large' onClick={()=>setDisplay(!display)}/></h4>
      <DisplayInput setDisplay={setDisplay}setTodosCalanders={setTodosCalanders} display={display} todosCalanders={todosCalanders} Time={Time} value={value} setDescription={setDescription} description={description}/>
      </div>
    <div>
      {/*to does goes here */}

      {todosCalanders.map(item=>{
        return(
            <>
            <div style={{ display:"flex",color:"gray",justifyContent:"space-evenly",height:"4rem"}}>
                <h1 style={{color:"rgba(121,50,128)"}}>{item.time}</h1>
                {/* Line */}
                <div style={{height:"100%",width:"0.5rem",background:colors[0]}}></div>
                <h2 style={{fontSize:"1.5rem",alignSelf:"end"}}>{item.description}</h2>
            </div>
            </>
        )
      })}

     
    </div>
          </div>

  )
}

export default CalenderBox

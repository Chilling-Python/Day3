import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var[data,setData] =useState("click the button");
    const home = () =>{
        console.log("home");
        setData("Home")
    }
    
    const gallary = () =>{
        console.log("gallary");
        setData("Gallary")
    }
    const contact = () =>{
        console.log("contact");
        setData("Contact")
    }
  return (
    <div style={{ marginLeft:'0',marginTop:'5%',textAlign:"center"}}>

    <Typography variant ="h2" style={{marginLeft:'5%'}}>
        Welcome To {data}
       </Typography> 
   <br /><br />
    <Button variant="contained" onClick={home} >Home</Button>&nbsp;&nbsp;
    <Button variant="contained" color="secondary" onClick={gallary}  > Gallary</Button>&nbsp;&nbsp;
    <Button variant="contained" color="error" onClick={contact} > Contact</Button>    
    </div>
  )
}

export default New

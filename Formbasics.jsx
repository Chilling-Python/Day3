import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Formbasics = () => {
var [input,setInput]=useState({ username:"",email:"",place:''});
 const inputHandler = (e) =>{
   console.log(e.target.value);
   setInput({...input,[e.target.name]:e.target.value});
   console.log(input);
 }
  return (
    <div style={{marginTop:"10%",marginLeft:"45%"}}>
     <TextField variant ='outlined' label='username' onChange={inputHandler} name="username"  value={input.username}/>
     <br /><br />
     <TextField variant ='outlined' label='email' onChange={inputHandler} name="email"  value={input.email}/>
     <br /><br />
     <TextField variant ='outlined' label='place' onChange={inputHandler} name="place"  value={input.place}/>
     <br /><br />
     <Button varient ='contained' color="success"> Login</Button>
    </div>
  )
}

export default Formbasics


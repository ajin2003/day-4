import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {
  const [count,setCount]=useState(0);
//   let valueAdd=()=>{
//     setCount(count+1)
//     console.log
//   }
 const[form,setForm]=useState(
     {
         fname:'',
         department:'',
         semester:''
     }
 )
 function valueCap(e) {
    setForm({...form,[e.target.name]:e.target.value})
    //console.log(e)
 }
 let valueAdd=()=>{
    console.log(form)
 }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          //defaultValue=""
          name="fname "
          onChange={valueCap}
          //variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="year"
          //defaultValue="Hello World"
          onChange={valueCap}
        />
        <TextField
          id="standard-password-input"
          label="director"
          name='semester'
          onChange={valueCap}
        />
        <br />
        <Button variant='contained' color='success' onClick={valueAdd}>Submit</Button>
        <br />
        {/*<small>count is {count}</small>*/}
      </div>
    </Box>
    </div>
  )
}
export default Add

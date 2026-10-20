import { Typography, Button, TextField } from '@mui/material'
import { useState } from 'react'

const Test = () => {
  const [name, setName] = useState("")
  return (
    <>
      <div>
        <Typography variant='h5' sx={{ color: "red", border: "1px solid red", borderRadius: "10px" }} >Hello Typography</Typography>
      </div>

      <div>
        <Button onClick={() => alert("Btn clicked")} color='success' size='medium' sx={{ margin: 3 }} variant='contained'>First</Button>
        <Button onClick={() => alert("Btn clicked")} color='error' size='large' sx={{ margin: 3 }} variant='outlined'>Second</Button>
        <Button onClick={() => alert("Btn clicked")} color='info' size='small' sx={{ margin: 3 }} variant='text'>Third</Button>
      </div>

      <div>
        <TextField value={name} onChange={(e) => setName(e.target.value)} type='text' sx={{ margin: 3 }} placeholder='Name' variant='outlined' />
        <TextField type='email' sx={{ margin: 3 }} placeholder='Email' variant='standard' />
        <TextField type='password' sx={{ margin: 3 }} placeholder='Password' variant='filled' />
        <Typography>{name}</Typography>
      </div>
    </>
  )
}

export default Test
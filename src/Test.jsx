import { Typography, Button, TextField } from '@mui/material'
import { useState } from 'react'

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  }
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
        <form onSubmit={handleSubmit}>
          <TextField
            name='name'
            value={inputs.name}
            onChange={handleChange}
            type='text'
            sx={{ margin: 3 }}
            placeholder='Name' variant='outlined' />
          <TextField
            name='email'
            value={inputs.email}
            onChange={handleChange}
            type='email'
            sx={{ margin: 3 }}
            placeholder='Email'
            variant='standard' />
          <TextField
            name='password'
            value={inputs.password}
            onChange={handleChange}
            type='password'
            sx={{ margin: 3 }}
            placeholder='Password'
            variant='filled' />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Test
import { Button, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react'

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
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
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
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
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={() => setInputs(prev => ({
              ...prev, subscribe: !inputs.subscribe
            }))} />} label="Subscribe  To Newsletter" />
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Test
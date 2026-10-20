import { Typography, Button } from '@mui/material'


const Test = () => {
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


    </>
  )
}

export default Test
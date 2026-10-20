import { AppBar, Button, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <AppBar sx={{ position: 'sticky' }}>
      <Toolbar>
        <Typography>Logo</Typography>
        <Button variant="contained" color="warning" sx={{ marginLeft: 'auto' }}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}
export default Header
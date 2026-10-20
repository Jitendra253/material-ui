import { AppBar, Button, Toolbar, Typography, Tabs, Tab } from "@mui/material"
import { useState } from "react"
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import IconButton from '@mui/material/IconButton';
const Header = () => {
  const [value, setValue] = useState(0)
  return (
    <AppBar sx={{ position: 'sticky' }}>
      <Toolbar>
        <IconButton>
          <AccountCircleSharpIcon color="error" />
        </IconButton>
        <Typography>Logo</Typography>
        <Button variant="contained" color="warning" sx={{ marginLeft: 'auto' }}>Login</Button>
        <Tabs indicatorColor="primary" textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
          <Tab label="First"></Tab>
          <Tab label="Second"></Tab>
          <Tab label="Third"></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
export default Header
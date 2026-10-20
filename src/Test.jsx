import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import { useState } from "react";
const Test = () => {
  const array = ["First", "Second", "Third", "Fourth"];
  const [open, setOpen] = useState(false)
  return (
    <div>
      <List>
        <ListItem>
          <ListItemButton onClick={() => setOpen(prev => !prev)}>
            <ListItemIcon >{">"}</ListItemIcon>
            <ListItemText primary="Expand List" />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={open}>
        <List sx={{ marginLeft: '200px' }}>
          {
            array.map((item) => (
              <ListItem divider>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))
          }

        </List>
      </Collapse>

    </div>
  )
}
export default Test;
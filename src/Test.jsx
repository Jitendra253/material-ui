import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
const Test = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <Tabs indicatorColor="primary" textColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
        <Tab label="First"></Tab>
        <Tab label="Second"></Tab>
        <Tab label="Third"></Tab>
      </Tabs>
    </div>
  )
}
export default Test;
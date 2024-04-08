import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyMenu from "./app/components/Menu";
import { Button, Drawer } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      </header>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <MyMenu />
      </Drawer>
    </div>
  );
}

export default App;

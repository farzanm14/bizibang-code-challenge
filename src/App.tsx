import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./app/components/Header";
import MyMenu from "./app/components/Menu";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="App">
      <ResponsiveAppBar toggleMenu={toggleDrawer(true)} />
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

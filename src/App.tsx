import { Drawer } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./app/components/Header";
import MyMenu from "./app/components/Menu";
import DataTablePage from "./app/pages/dataTablePage";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="App">
      <ResponsiveAppBar toggleMenu={toggleDrawer(true)} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <MyMenu />
      </Drawer>
      <div>
        <DataTablePage />
      </div>
    </div>
  );
}

export default App;

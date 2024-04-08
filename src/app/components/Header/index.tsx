import {
  ArrowDropDown,
  DarkMode,
  Refresh,
  Translate,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "./index.css";

interface HeaderProps {
  toggleMenu: () => void;
}

function ResponsiveAppBar({ toggleMenu }: HeaderProps) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="app-bar">
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
              color="inherit"
            >
              <MenuIcon />
              <Typography> لیست ثابت ها </Typography>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="لیست زبان های قابل ترجمه نمایش داده خواهد شد">
              <IconButton sx={{ p: 0 }}>
                <ArrowDropDown />
                <Typography>فارسی</Typography>
                <Translate />
              </IconButton>
            </Tooltip>
            <IconButton>
              <DarkMode />
            </IconButton>
            <IconButton>
              <Refresh />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

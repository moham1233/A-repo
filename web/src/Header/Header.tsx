import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = (): JSX.Element => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Main</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

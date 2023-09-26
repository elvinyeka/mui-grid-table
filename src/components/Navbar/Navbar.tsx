import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useContext} from "react";
import { useTheme } from '@mui/material/styles';
import {ColorModeContext} from "../Theme";


const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  
  
  // console.log(theme.palette.mode)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={'transparent'}>
        <Toolbar sx={{justifyContent:'flex-end'}}>
          <IconButton
            color="inherit"
            sx={{ mr: 2 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

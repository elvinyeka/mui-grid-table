import Table from "./components/Table";
import {Box, CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider,} from '@mui/material/styles';
import {useMemo, useState} from "react";
import {ColorModeContext} from "./components/Theme";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  

  
  
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{width: '100%' }}>
        <Navbar/>
        <Table/>
      </Box>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

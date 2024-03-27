import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';

import { baselightTheme } from './theme/DefaultColors';
import { AppContextProvider } from './context/Provider';

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>{routing}</AppContextProvider>
    </ThemeProvider>
  );
}

export default App;

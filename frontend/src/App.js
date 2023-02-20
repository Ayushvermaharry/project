import React from 'react';
// import Routing from './routes';
import Routes from './routes';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import themes from './theme';

// project imports
import NavigationScroll from './layouts/NavigationScroll';


function App() {
  const customization = useSelector((state) => state.customization);

  
  return (
    <>
      <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                  <NavigationScroll>
                    <Routes />
                  </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    </>
  );
}

export default App;

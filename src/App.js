import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Main from './components/index';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;

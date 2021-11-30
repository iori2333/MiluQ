import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import './index.scss';
import { store } from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

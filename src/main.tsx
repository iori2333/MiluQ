import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import './index.scss';
import { store } from './redux/store';
import App from './App';
import ChatPage from './pages/ChatPage';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="settings" element={<div>Settings</div>} />
              <Route path="g/:chat" element={<ChatPage.Group />} />
              <Route path="p/:chat" element={<ChatPage.Private />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

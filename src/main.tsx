import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import './index.scss';
import { store } from './redux/store';
import App from './App';
import ChatPage from './pages/ChatPage';
import SettingsPage from './pages/SettingsPage';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="settings" element={<SettingsPage />}>
          <Route path="my" element={<div>My</div>} />
          <Route path="system" element={<div>System</div>} />
        </Route>
        <Route path=":type/:chat" element={<ChatPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

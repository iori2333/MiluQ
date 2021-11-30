import { useInterval } from '@chakra-ui/hooks';
import React, { useState } from 'react';

import AppContainer from './components/AppContainer';
import SideBar from './components/SideBar';
import LoadingPage from './pages/LoadingPage';

function App() {
  useInterval(() => console.log('Check online'), 120000);

  const [loading, setLoading] = useState(true);
  return loading ?
    <LoadingPage callback={() => setLoading(false)} /> :
    <>
      <SideBar />
      <AppContainer />
    </>;
}

export default App;

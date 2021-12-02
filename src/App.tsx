import { useInterval } from '@chakra-ui/hooks';
import React, { useState } from 'react';

import AppContainer from './pages/AppContainer';
import LoadingPage from './pages/LoadingPage';
import AppSideBar from './pages/AppSideBar';

function App() {
  useInterval(() => console.log('Check online'), 120000);

  const [loading, setLoading] = useState(true);
  return loading ? (
    <LoadingPage callback={() => setLoading(false)} />
  ) : (
    <>
      <AppSideBar />
      <AppContainer />
    </>
  );
}

export default App;

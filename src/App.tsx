import React, { useState } from 'react';

import AppContainer from './pages/AppContainer';
import LoadingPage from './pages/LoadingPage';
import AppSideBar from './pages/AppSideBar';

function App() {
  const [online, setOnline] = useState(false);
  return online ? (
    <>
      <AppSideBar />
      <AppContainer />
    </>
  ) : (
    <LoadingPage setOnline={setOnline} />
  );
}

export default App;

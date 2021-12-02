import React from 'react';
import { Outlet } from 'react-router';

import './index.scss';

function AppContainer() {
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
}

export default AppContainer;

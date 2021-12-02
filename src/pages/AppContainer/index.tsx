import React, { createContext, useRef } from 'react';
import { Outlet } from 'react-router';

import './index.scss';

export const AppContext = createContext<{ scrollTop: () => void }>({
  scrollTop: () => {}
});

function AppContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return (
    <div className="app-container" ref={containerRef}>
      <AppContext.Provider value={{ scrollTop }}>
        <Outlet />
      </AppContext.Provider>
    </div>
  );
}

export default AppContainer;

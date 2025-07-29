import React from 'react';
import {MusicControl} from './MusicControl.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <MusicControl />
    </>
  );
};

export default Layout;
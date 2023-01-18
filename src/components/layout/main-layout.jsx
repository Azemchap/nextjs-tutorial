import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

const MainLayout = ({ children }) => {
  return (
    <div className='relative'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

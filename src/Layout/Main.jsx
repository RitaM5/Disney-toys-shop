import React, { useEffect } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const loc = useLocation();
    useEffect(()=>{
      if(loc.pathname === "/"){
        document.title = `DISNEYSHOP - HOME`;
      }
      else{
        document.title = `DISNEYSHOP ${loc.pathname.replace("/", "-  ")}`
      }
      if(loc.state){
        document.title = `DISNEYSHOP- ${loc.state}`
      }
    }, [loc.pathname])
    return (
        <div className=' overflow-hidden'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
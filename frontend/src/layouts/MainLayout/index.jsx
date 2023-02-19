import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from '../../layouts/MainLayout/Sidebar/Sidebar';
import Main from './main';
import EmptySidebar from "./Sidebar/emptySidebar";

const MainLayout = (props) => {
  

  
  return (
    <>
      <div>

        <Header />
        <div className="flex flex-row flex-wrap mt-[120px] ">
          {props.sidebar ? (
            <>
              <div className="flex-auto basis-1/5">
              { typeof props.sidebarComponent === 'undefined'? <Sidebar sidebarComponent={EmptySidebar} ></Sidebar> : <Sidebar sidebarComponent={props.sidebarComponent} sidebarData={props.sidebarData}></Sidebar>} 
              </div>
              <div className="flex-auto basis-4/5">
                <Main>{props.children}</Main>
              </div>
            </>
          ) : (
            <div className="w-[100%]">
              <Main>{props.children}</Main>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;

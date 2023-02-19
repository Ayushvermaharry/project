import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./NewHeader/Header";
import Drawer from "./NewHeader/Drawer/SideDrawer";



const Layout2 = () => {
  

  return (
    <>
    <div className="bg-[#FAFBFB]">
      <div className="flex w-full min-h-screen">
        <Header/>
      </div>
      <div>
        {/* <Drawer/> */}
      </div>
    </div>
    </>
  );
};

export default Layout2;

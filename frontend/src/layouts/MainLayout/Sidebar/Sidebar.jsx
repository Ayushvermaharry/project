import React from "react";

import { Paper } from "@mui/material";


function Sidebar(props) {
  return (
      <aside className="w-[280px] fixed left-3 bg-transparent min-h-fit ">
        <Paper elevation={4} className="h-screen overflow-x-auto">
          <div className="p-6">
          <props.sidebarComponent componentData={props.sidebarData}/>
          {/* <ProductSideBar/> */}
          </div>
        </Paper>
      </aside>
  );
}

export default Sidebar;

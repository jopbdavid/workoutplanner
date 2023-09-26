import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <>
      {/* <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> */}
      <div className="flex flex-col flex-wrap content-center justify-start">
        {/* Page content here */}

        <header className="m-12">Logo</header>

        <button className=" btn tracking-widest hover:scale-105 font-bold py-2 px-4">
          ADD EVENT
        </button>
      </div>

      {/* </div> */}
    </>
  );
};

export default Sidebar;

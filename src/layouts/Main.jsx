// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
import React from "react";

// components
import Nav from "../components/Nav";

//  helper functions
import { fetchData } from "../helpers";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Main;

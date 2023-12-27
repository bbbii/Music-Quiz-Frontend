import { Outlet } from "react-router-dom";

import Header from "layout/header/Header";

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

import { Link } from "@remix-run/react";
import React from "react";
import { Outlet } from "react-router";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <Link className="sticky top-4 ml-4" to="/">
        Home
      </Link>
      <div className="flex h-screen flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

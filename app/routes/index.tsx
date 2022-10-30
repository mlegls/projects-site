import { Link } from "@remix-run/react";
import React from "react";

export default function Index() {
  return (
    // tailwind centered div
    <ul className="flex h-screen items-center justify-center">
      <li>
        <Link to="/projects/wk-shufa">WaniKani 书法</Link>
      </li>
    </ul>
  );
}

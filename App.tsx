import React from "react";
import { Routes } from "./src/routers";
import { UsersProvider } from "./src/Context/UsersContext";


export default function App() {
  return (
    <UsersProvider>
      <Routes />
    </UsersProvider>
  );
}


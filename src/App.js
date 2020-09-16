import React from "react";
import "./App.css";

import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <SideBar />

      <Chat />
    </div>
  );
}

export default App;

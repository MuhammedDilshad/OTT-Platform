import React from "react";
import NavBar from "./components/navBar/NavBar";
import { action,orginals } from "./Url";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost Url={orginals} title='Netflix Originals'/>
     <RowPost Url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;

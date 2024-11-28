import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Component/home/Home';
import Add from './Component/add/Add';
import List from './Component/list/List';
import Navbar from "./Component/navbar/Navbar";
import './App.css';
function App() {

  return (
    <div className="App">
     
     <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

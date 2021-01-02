import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import SideDrawer from "./components/SideDrawer";
const App = () => {
  const [menuClose, setMenuClose] = useState(true);
  const handleClose = (value) => {
    console.log(value);
    setMenuClose(value);
  };
  return (
    <div>
      <Router>
        <SideDrawer handleClose={handleClose} menuClose={menuClose} />
        <NavBar handleClose={handleClose} />
        <Home />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

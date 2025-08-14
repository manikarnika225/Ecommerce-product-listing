 import Shopping from "./components/Shopping";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shopping" element={<Shopping />} />
          
          
        </Routes>

    </div>
  );
}

export default App;

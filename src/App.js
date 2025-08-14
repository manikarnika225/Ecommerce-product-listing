import { useState } from "react";
/* import Counter from "./components/Counter";
 */import Shopping from "./components/Shopping";
import SampleComponent from "./components/SampleComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  /* const [sampleData, setSampleData] = useState(52); */ 
  return (
    <div className="main-wrapper">
      {/* <Counter/> 
      <Shopping/> */}
         {/* <h1>Sample Data Value is: {sampleData }</h1>
         <SampleComponent data={sampleData}/> */} 
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/counter" element={<Counter />} /> */}
          <Route path="/shopping" element={<Shopping />} />
          
        </Routes>

    </div>
  );
}

export default App;

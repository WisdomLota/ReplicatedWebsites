import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sitePages/Home.jsx";
import HondaCyprus from "./sitePages/HondaCyp.jsx";
import FBA_Finance from "./sitePages/FBA_Finance.jsx";
import Test from "./sitePages/Test.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hondaCyprus" element={<HondaCyprus/>}/>
          <Route path="/FBA_Finance" element={<FBA_Finance/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

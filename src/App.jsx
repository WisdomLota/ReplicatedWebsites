import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sitePages/Home.jsx";
import HondaCyprus from "./sitePages/HondaCyp.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hondaCyprus" element={<HondaCyprus/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

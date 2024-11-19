import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HondaCyprus from "./sitePages/HondaCyp.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/hondaCyprus" element={<HondaCyprus/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

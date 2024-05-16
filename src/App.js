import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      {/* <Routes>
       
      </Routes> */}
    </Router>
  );
};

export default App;

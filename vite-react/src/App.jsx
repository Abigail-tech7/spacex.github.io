import { useState } from "react";
// import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;

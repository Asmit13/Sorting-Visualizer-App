import './App.css';
import SortComponent from "./components/sort";
import HeaderComponent from "./components/header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import About from "./components/about"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/sort" element={<SortComponent />} />
          <Route path="/about" element={<About />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

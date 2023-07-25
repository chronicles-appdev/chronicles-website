import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

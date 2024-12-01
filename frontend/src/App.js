import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Slider />
        <main style={{ flex: "1" }}>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
            {/* Add more routes as necessary */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

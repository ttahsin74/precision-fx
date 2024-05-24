// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CopyTrading from "./pages/CopyTrading";
import About from "./pages/About";
import "./style/style.scss";
import Trusted from "./pages/Trusted";
import ProfotLose from "./pages/ProfotLose";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Corevalue from "./pages/Corevalue";
function App() {
  return (
    <section className="bg-black font-syne overflow-hidden">
      <Navbar />
      <Home />
      <Trusted />
      <CopyTrading />
      <About />
      <Corevalue />
      <ProfotLose />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;

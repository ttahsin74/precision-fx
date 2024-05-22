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
function App() {
  return (
    <section className="bg-black font-syne">
      <Navbar />
      <Home />
      <Trusted />
      <CopyTrading />
      <About />
      <ProfotLose />
      <Contact/>
      <Footer />
    </section>
  );
}

export default App;

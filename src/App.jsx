import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Testimonials />
    <Contact />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

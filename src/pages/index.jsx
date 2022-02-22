import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const NotFound = lazy(() => import("./NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/tentang" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/*all" element={<NotFound />} />
    </Routes>
  );
}

export default App;

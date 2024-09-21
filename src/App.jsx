import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MediaKit from "./pages/MediaKit";
import ActionHero from "./pages/ActionHero";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/tab=mobileApp" element={<Dashboard />} />
        <Route path="/tab=businessSolutions" element={<Dashboard />} />
        <Route path={"/tab=pricing"} element={<Dashboard />} />
      </Route>
      <Route path={"/mediaKit"} element={<MediaKit />} />
      <Route path={"/actionHero"} element={<ActionHero />} />
      <Route path={"/complete"} element={<h1>Completed</h1>} />
    </Routes>
  );
}

export default App;

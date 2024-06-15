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
      </Route>
      <Route path={"/mediaKit"} element={<MediaKit />} />
      <Route path={"/actionHero"} element={<ActionHero />} />
    </Routes>
  );
}

export default App;

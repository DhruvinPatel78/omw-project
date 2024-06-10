import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/Dashboard";
import MediaKit from "./pages/MediaKit";
function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Layout selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      <Routes>
        <Route path="/" element={<Dashboard selectedTab={selectedTab} />} />
        <Route path={"/mediaKit"} element={<MediaKit />} />
      </Routes>
    </Layout>
  );
}

export default App;

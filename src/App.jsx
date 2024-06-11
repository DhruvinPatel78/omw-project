import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/Dashboard";
import MediaKit from "./pages/MediaKit";
import MobileApp from "./pages/MobileApp";
import BusinessSolutions from "./pages/BusinessSolutions";
function App() {
  const [selectedTab, setSelectedTab] = useState("mobileApp");
  return (
    <Layout selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      <Routes>
        <Route path="/" element={<Dashboard selectedTab={selectedTab} />} >
        <Route path="/tab=mobileApp" element={<MobileApp />} />
        <Route path="/tab=businessSolutions" element={<BusinessSolutions />} />
        </Route>
        <Route path={"/mediaKit"} element={<MediaKit />} />
      </Routes>
    </Layout>
  );
}

export default App;

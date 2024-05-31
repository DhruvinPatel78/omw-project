import "./App.css";
import Header from "./pages/header";
import { useState } from "react";
import MobileApp from "./pages/MobileApp";
function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
      <div className="w-full overflow-hidden">
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className={"border-b border-secondary"}></div>
        {selectedTab === 0 && <MobileApp />}
      </div>
  );
}

export default App;

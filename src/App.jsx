import "./App.css";
import Header from "./pages/header";
import { useState } from "react";
import MobileApp from "./pages/MobileApp";
import Footer from "./pages/footer";
function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="w-full overflow-hidden">
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={"border-b border-secondary"}></div>
      {selectedTab === 0 && <MobileApp />}
      <Footer />
    </div>
  );
}

export default App;

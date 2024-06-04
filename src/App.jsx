import "./App.css";
import Header from "./pages/header";
import { useState } from "react";
import MobileApp from "./pages/MobileApp";
import Footer from "./pages/footer";
import BusinessSolutions from "./pages/BusinessSolutions";
function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="w-full overflow-hidden">
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={"border-b border-secondary"}></div>
      {selectedTab === 0 && <MobileApp />}
      {selectedTab === 1 && <BusinessSolutions />}
      <Footer />
    </div>
  );
}

export default App;

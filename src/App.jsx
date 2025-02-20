import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MediaKit from "./pages/MediaKit";
import Privacy from "./pages/Privacy";
import ContactUs from "./pages/contactUs";
import AccountDeletion from "./pages/AccountDeletion";
import Terms from "./pages/Terms";
import BusinessSolutions from "./pages/BusinessSolutions";
import PricingPage from "./pages/Pricing";
import TermAndCondition from "./pages/TermAndCondition";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path={"/pricing"} element={<PricingPage />} />
      <Route path={"/pricing/:id"} element={<PricingPage />} />
      <Route path={"/business"} element={<BusinessSolutions />} />
      <Route path={"/contactUs"} element={<ContactUs />} />
      <Route path={"/privacy"} element={<Privacy />} />
      <Route path={"/terms"} element={<Terms />} />
      <Route path={"/account/deletion"} element={<AccountDeletion />} />
      <Route path={"/mediaKit"} element={<MediaKit />} />
      <Route path={"/termsandconditions/:id"} element={<TermAndCondition />} />
      {/*<Route path={"/actionHero"} element={<ActionHero />} />*/}
      {/*<Route path={"/complete"} element={<h1>Completed</h1>} />*/}
    </Routes>
  );
}

export default App;

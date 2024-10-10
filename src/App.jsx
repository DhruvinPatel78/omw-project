import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MediaKit from "./pages/MediaKit";
import Privacy from "./pages/Privacy";
import ContactUs from "./pages/contactUs";
import AccountDeletion from "./pages/AccountDeletion";
import Terms from "./pages/Terms";
import ActionHero from "./pages/ActionHero";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/tab=mobileApp" element={<Dashboard />} />
        <Route path="/tab=businessSolutions" element={<Dashboard />} />
        <Route path={"/tab=pricing"} element={<Dashboard />} />
      </Route>
      <Route path={"/contactUs"} element={<ContactUs />} />
      <Route path={"/privacy"} element={<Privacy />} />
      <Route path={"/terms"} element={<Terms />} />
      <Route path={"/account/deletion"} element={<AccountDeletion />} />
      <Route path={"/mediaKit"} element={<MediaKit />} />
      <Route path={"/actionHero"} element={<ActionHero />} />
      <Route path={"/complete"} element={<h1>Completed</h1>} />
    </Routes>
  );
}

export default App;

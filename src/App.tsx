import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;

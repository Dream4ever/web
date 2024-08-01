import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { RotationProvider } from "./RotationContext";
import Download from "./pages/Download";

function App() {
  return (
    <div>
      <RotationProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="download" element={<Download />} />
        </Routes>
      </RotationProvider>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { RotationProvider } from "./RotationContext";
import Download from "./pages/Download";
import Blog from "./pages/Blog";
import Detail from "./pages/Blog/Detail";

function App() {
  return (
    <div>
      <RotationProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="download" element={<Download />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/wtg-is-a-consumer-layer" element={<Detail />} />
        </Routes>
      </RotationProvider>
    </div>
  );
}

export default App;

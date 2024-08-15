import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { RotationProvider } from "./RotationContext";
import Download from "./pages/Download";
import Blog from "./pages/Blog";
import Detail from "./pages/Blog/Detail";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Onboarding users to Web 3 in just several clicks" data-react-helmet="true" />
        <meta name="description" content="Web3 Social Network for" data-react-helmet="true" />
        <meta name="og:image" content="https://www.townesquare.xyz/preview.png" data-react-helmet="true" />
      </Helmet>
      <RotationProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="download" element={<Download />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/wtf-is-a-consumer-layer" element={<Detail />} />
        </Routes>
      </RotationProvider>
    </div>
  );
}

export default App;

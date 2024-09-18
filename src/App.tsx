import { Route, Routes } from "react-router-dom";
import MainV3 from "./pages/MainV3";
import { RotationProvider } from "./RotationContext";
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
          <Route path="/" element={<MainV3 />} />
        </Routes>
      </RotationProvider>
    </div>
  );
}

export default App;

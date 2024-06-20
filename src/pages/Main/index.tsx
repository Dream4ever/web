import { lazy, Suspense } from "react";
import Join from "../../components/Join";
import Header from "../../components/Header";

const Features = lazy(() => import("../../components/Features"));
const Adoption = lazy(() => import("../../components/Adoption"));
const SocialGraph = lazy(() => import("../../components/SocialGraph"));
const Mobile = lazy(() => import("../../components/Mobile"));
const Footer = lazy(() => import("../../components/Footer"));

function Main() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>LOADING</div>}>
        <Features />
        <Adoption />
        <SocialGraph />
        <Mobile />
        <Join />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Main;

import { lazy, Suspense, useEffect } from "react";
import Join from "../../components/Join";
import Header from "../../components/Header";

const Features = lazy(() => import("../../components/Features"));
const Adoption = lazy(() => import("../../components/Adoption"));
const SocialGraph = lazy(() => import("../../components/SocialGraph"));
const Mobile = lazy(() => import("../../components/Mobile"));
const Footer = lazy(() => import("../../components/Footer"));

function Main() {
  useEffect(() => {
    const onScroll = (e: any) => {
      // console.log(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
  }, [])
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

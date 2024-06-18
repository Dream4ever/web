import { useEffect, useState, lazy, Suspense } from "react";
import EarlyAccess from "../../components/EarlyAccess";
import Header from "../../components/Header";

const Features = lazy(() => import("../../components/Features"));
const Adoption = lazy(() => import("../../components/Adoption"));
const SocialGraph = lazy(() => import("../../components/SocialGraph"));
const Mobile = lazy(() => import("../../components/Mobile"));
const Footer = lazy(() => import("../../components/Footer"));
// const Header = lazy(() => import("../../components/Header"));

function Main() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>LOADING</div>}>
        <Features />
        <Adoption />
        <SocialGraph />
        <Mobile />
        <EarlyAccess />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Main;

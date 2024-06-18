import { useEffect, useState, lazy, Suspense } from "react";
import EarlyAccess from "../../components/EarlyAccess";

const Features = lazy(() => import("../../components/Features"));
const Adoption = lazy(() => import("../../components/Adoption"));
const SocialGraph = lazy(() => import("../../components/SocialGraph"));
const Mobile = lazy(() => import("../../components/Mobile"));

function Main() {

  return (
    <div>
      <Suspense fallback={<div>LOADING</div>}>
        <Features />
        <Adoption />
        <SocialGraph />
        <Mobile />
      </Suspense>
      <EarlyAccess />
    </div>
  );
}

export default Main;

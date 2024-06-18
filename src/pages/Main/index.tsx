import { useEffect, useState, lazy, Suspense } from "react";
import EarlyAccess from "../../components/EarlyAccess";

const Features = lazy(() => import("../../components/Features"));
const Adoption = lazy(() => import("../../components/Adoption"));

function Main() {

  return (
    <div>
      <Suspense fallback={<div>LOADING</div>}>
        <Features />
        <Adoption />
      </Suspense>
      <EarlyAccess />
    </div>
  );
}

export default Main;

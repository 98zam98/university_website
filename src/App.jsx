import { lazy, Suspense, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
// import AboutUs from "./screens/AboutUs";
// import Ad from "./screens/Ad";
// import Explore from "./screens/Explore";
import Home from "./screens/Home";
// import HowItWorks from "./screens/HowItWorks";
import Loading from "./components/Loading";
import PhoneMoving from "./components/PhoneMoving";

const AboutUs = lazy(() => import("./screens/AboutUs"));
const Ad = lazy(() => import("./screens/Ad"));
const Explore = lazy(() => import("./screens/Explore"));
const HowItWorks = lazy(() => import("./screens/HowItWorks"));

export default function App() {
  const [posFlag, setPosFlag] = useState(false);
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <main className="absolute inset-y-0 left-0 right-[-17px] overflow-y-scroll">
        <Home></Home>

        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
          {/* 
          delay for animation ? 
          the phone should move too
          */}
            <Explore />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <HowItWorks />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Ad />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <AboutUs />
          </Suspense>
        </ErrorBoundary>

        <PhoneMoving posFlag={posFlag} />
      </main>
    </div>
  )
}
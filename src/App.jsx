import AboutUs from "./screens/AboutUs";
import Ad from "./screens/Ad";
import Explore from "./screens/Explore";
import Home from "./screens/Home";
import HowItWorks from "./screens/HowItWorks";

export default function App() {
  return (
    <div class="w-screen h-screen relative overflow-hidden">
      <main className="absolute inset-y-0 left-0 right-[-17px] overflow-y-scroll">
        <Home></Home>
        <Explore></Explore>
        <HowItWorks></HowItWorks>
        <Ad></Ad>
        <AboutUs></AboutUs>
      </main>
    </div>
  )
}
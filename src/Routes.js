import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/Account/LogIn";
import MainPage from "./pages/MainPage/MainPage";
import SignUp from "./pages/Account/SignUp";
import Verified from "./pages/VerifiedPage/Verified";
import Home from "./pages/HomePage/Home";
import Carousel from "./components/CarouselJourneys/CarouselJourneys";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/home" element={<Home />} />
      <Route path="/carousel" element={<Carousel />} />
    </Routes>
  );
}

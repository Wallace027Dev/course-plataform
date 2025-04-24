import { Routes, Route } from "react-router-dom";

import LogIn from "./pages/Account/LogIn";
import SignUp from "./pages/Account/SignUp";
import Verified from "./pages/VerifiedPage/Verified";
import Home from "./pages/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPassword from "./pages/Account/ForgotPassword";
import AccountPage from "./pages/Account/Account";
import JourneyPage from "./pages/Journeys";
import Welcome from "./pages/Welcome";
import MainPage from "./pages/MainPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/account-info" element={<AccountPage />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/" element={<Home />} />
      <Route path="/:title/:id" element={<JourneyPage />} />

    </Routes>
  );
}

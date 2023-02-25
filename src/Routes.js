import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/PrivateRoutes/PrivateRoutes";

import LogIn from "./pages/Account/LogIn";
import MainPage from "./pages/MainPage/MainPage";
import SignUp from "./pages/Account/SignUp";
import Verified from "./pages/VerifiedPage/Verified";
import Home from "./pages/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPassword from "./pages/Account/ForgotPassword";
import AccountPage from "./pages/Account/Account";
import Front from "./pages/Journeys/Front";
import DataJ from "./pages/Journeys/DataJ";
import Back from "./pages/Journeys/Back";
import Digital from "./pages/Journeys/Digital";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/account-info"
        element={
          //<ProtectedRoute>
            <AccountPage />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/verified"
        element={
          <ProtectedRoute>
            <Verified />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          //<ProtectedRoute>
          <Home />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/home/e774057d-f0e8-4d5f-8076-33522fffb96d"
        element={
          //<ProtectedRoute>
          <Front />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/home/eca8e48a-57b3-46a1-a6ae-923aca77fc11"
        element={
          //<ProtectedRoute>
          <Back />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/home/73a0e476-b7b1-464d-9d73-8faa71b44922"
        element={
          //<ProtectedRoute>
          <DataJ />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/home/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af"
        element={
          //<ProtectedRoute>
          <Digital />
          //</ProtectedRoute>
        }
      />
    </Routes>
  );
}

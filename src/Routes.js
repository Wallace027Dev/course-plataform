import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/Account/LogIn";
import MainPage from "./pages/MainPage/MainPage";
import SignUp from "./pages/Account/SignUp";
import Verified from "./pages/VerifiedPage/Verified";
import Home from "./pages/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPassword from "./pages/Account/ForgotPassword";
import AccountPage from "./pages/Account/Account";
import { ProtectedRoute } from "./components/PrivateRoutes/PrivateRoutes";
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
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
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
        path="/front"
        element={
          //<ProtectedRoute>
            <Front />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/back"
        element={
          //<ProtectedRoute>
            <Back />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/data"
        element={
          //<ProtectedRoute>
            <DataJ />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/digital"
        element={
          //<ProtectedRoute>
            <Digital />
          //</ProtectedRoute>
        }
      />
    </Routes>
  );
}

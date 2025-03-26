import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ResetPassword from "../components/ResetPassword.jsx";
import ProtectedAuthRoute from "../components/ProtectedAuthRoute.jsx";
import HomePage from "../components/pages/HomePage.jsx";
import SearchAuctionPage from "../components/pages/SearchAuctionPage.jsx";
import LiveAuction from "../components/pages/LiveAuction.jsx";
import CreateAuction from "../components/pages/CreateAuction.jsx";
import Messages from "../components/pages/Messages.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },

  // Protect auth page from logged-in users if they Are Already Logged-In
  {
    path: "/authpage",
    element: (
      <ProtectedAuthRoute>
        <AuthPage />
      </ProtectedAuthRoute>
    ),
  },

  // Dashboard layout with nested routes
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <HomePage /> }, // default route
      { path: "search", element: <SearchAuctionPage /> },
      { path: "live", element: <LiveAuction /> },
      { path: "create", element: <CreateAuction /> },
      { path: "messages", element: <Messages /> },
    ],
  },

  // Password reset route
  { path: "/reset-password", element: <ResetPassword /> },
]);

export default router;

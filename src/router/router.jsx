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
  {
    path: "/authpage",
    element: (
      <ProtectedAuthRoute>
        <AuthPage />
      </ProtectedAuthRoute>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchAuctionPage /> },
      { path: "live", element: <LiveAuction /> },
      { path: "create", element: <CreateAuction /> },
      { path: "messages", element: <Messages /> },
    ],
  },
  { path: "/reset-password", element: <ResetPassword /> },
]);

export default router;

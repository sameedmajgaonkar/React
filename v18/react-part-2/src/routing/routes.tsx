import { createBrowserRouter } from "react-router";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "users/",
            element: <UsersPage />,
            children: [{ path: ":id", element: <UserDetail /> }],
          },
        ],
      },
    ],
  },
]);

export default router;

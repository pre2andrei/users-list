import { createBrowserRouter } from "react-router-dom";
import UsersList from "./UsersList";
import UserPage from './UserPage';
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersList/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/:id",
      element: <UserPage/>,
      errorElement: <ErrorPage/>
    },
  ]);

  export default router;
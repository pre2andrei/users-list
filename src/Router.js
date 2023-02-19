import { createBrowserRouter } from "react-router-dom";
import UsersList from "./UsersList";
import UserPage from './UserPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersList/>,
    },
    {
      path: "/:id",
      element: <UserPage/>,
    },
  ]);

  export default router;
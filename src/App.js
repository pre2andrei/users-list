import "./styles/App.css";
import "./styles/UsersList.css";
import "./styles/UserPage.css";
import "./styles/Loading.css";
import "./styles/Search.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import React from "react";
import { SearchProvider } from "./SearchProvider";

export const SearchContext = React.createContext();

function App() {
  return (
    <div className="App">
       <div className="bg"></div> 
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </div>
  );
}
export default App;

import "./styles/App.css";
import "./styles/UsersList.css";
import "./styles/Loading.css";
import "./styles/Search.css";
import React from "react";
import { SearchProvider } from "./SearchProvider";
import UsersList from "./UsersList";

export const SearchContext = React.createContext();

function App() {
  return (
    <div className="App">
       <div className="bg"></div> 
      <SearchProvider>
       <UsersList/>
      </SearchProvider>
    </div>
  );
}
export default App;

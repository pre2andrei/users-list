import React, { useState, useContext } from "react";

const SearchContext = React.createContext();
const SetSearchContext = React.createContext();

export const useSearch = () => useContext(SearchContext);
export const useSetSearch = () => useContext(SetSearchContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const setSearchEvent = (event) => {
    setSearch(event.target.value);
  };

  return (
    <SearchContext.Provider value={search}>
      <SetSearchContext.Provider value={setSearchEvent}>
        {children}
      </SetSearchContext.Provider>
    </SearchContext.Provider>
  );
};

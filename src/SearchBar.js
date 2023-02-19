import { useSetSearch } from "./SearchProvider";

const SearchBar = () => {

  return <input type={"text"} placeholder="Search..." onChange={useSetSearch()} />;
};

export default SearchBar;

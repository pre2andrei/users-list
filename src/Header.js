import FaUsers from "./icons/FaUsers";
import SearchBar from "./SearchBar";
const Header = (props) => {
  return (
    <header>
      <FaUsers height="100" width="100" />

      <h1>My Users List</h1>
      <SearchBar />
    </header>
  );
};

export default Header;

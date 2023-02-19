import { Link } from "react-router-dom";
import FaUsers from "./icons/FaUsers";
import SearchBar from "./SearchBar";
const Header = (props) => {

  return (
    <header>
      <Link to={"/"}>
        <FaUsers height="100" width="100" />
      </Link>

      <h1>My Users List</h1>
      <SearchBar/>
    </header>
  );
};

export default Header;

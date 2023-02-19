import ListUser from "./ListUser";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSearch } from "./SearchProvider";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();

      // set state when the data received
      setUsers(data);
    };

    dataFetch();
  }, []);

  const search = useSearch();
  const filteredUsers = users.filter((x) =>
    `${x.name} ${x.username} ${x.email}$`
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
  );
  return (
    <>
      <Header />
      <div className="usersList">
        {filteredUsers.map((x) => (
          <ListUser user={x} key={x.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default UsersList;

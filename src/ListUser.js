import { Link } from "react-router-dom";

const ListUser = ({ user }) => {
  return (
    <div>
      <div className="listUser">
        <h2 className="listUserTitle">{user.username}</h2>
        <div className="fauser">
          <img
            src={`https://robohash.org/${user.username}?bgset=bg2`}
            alt={user.username}
          />
        </div>
        <div className="briefInfo">
          {user.name}
          <br />
          {user.email}
          <br />
          {user.phone}
        </div>
      </div>
    </div>
  );
};

export default ListUser;

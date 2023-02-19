import { useState } from "react";
import { useEffect } from "react";
import { json, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GiMailbox from "./icons/FcAddressBook";
import AiFillPhone from "./icons/AiFillPhone";
import HiDesktopComputer from "./icons/HiDesktopComputer";
import CgWorkAlt from "./icons/CgWorkAlt";
import FaMapMarkerAlt from "./icons/FaMapMarkerAlt";
import Address from "./Address";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(false);

 

  useEffect(() => {
    const dataFetch = async () => {
      if(isNaN(id)) 
      {
        setError(true);
        return;
      }
      const data = await (
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      )/json();
      setUser(data);
    };

    dataFetch();
  }, [id]);

  if(user == null) return <Loading/>;
  if(error) return <ErrorPage/>
  return (
    <>
      <Header />
      <div className="userpagewrap">
        <div className="userphotowrap">
          <img
            src={`https://robohash.org/${user.username}?bgset=bg3&size=200x200`}
            alt={user.username}
            width="200"
            height="200"
          />
          <br />
          <span>{user.name}</span>
        </div>
        <div className="infoGrid">
          <GiMailbox />
          <div>{user.email}</div>
          <AiFillPhone />
          <div>{user.phone}</div>
          <HiDesktopComputer />
          <div>{user.website}</div>
          <CgWorkAlt />
          <div>{user.company.name}</div>
          <FaMapMarkerAlt />
          <div>
            <Address address={user.address} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;

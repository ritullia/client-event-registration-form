import { useEffect, useState, useMemo } from "react";
import { AdminUser } from "./AdminUser";
// import { EditClientModal } from "./EditClientModal";
import { EventsListBox, EventsListContainer } from "../Styles/EventsListStyled";

import axios from "axios";

export const AdminUserList = () => {
  //   const [clientsData, setClientsData] = useState(null);
  //   const [activeClient, setActiveClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState(null);

  //   const handleAdminClick = (user) => {
  //     setAdminData(user);
  //   };

  useEffect(() => {
    axios("http://localhost:5000/user")
      .then((res) => {
        setAdminData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const mappedAdminUser = useMemo(() => {
    return adminData?.map((user) => <AdminUser key={user.id} user={user} />);
  }, [adminData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("USER", adminData);

  return (
    <EventsListBox>
      <EventsListContainer style={{ display: "flex", flexWrap: "wrap" }}>
        {mappedAdminUser}
      </EventsListContainer>
    </EventsListBox>
  );
};

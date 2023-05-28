import { useEffect, useState, useMemo } from "react";
import { Events } from "./Events";
import { EditClientModal } from "./EditClientModal";
import { EventsListBox, EventsListContainer } from "../Styles/EventsListStyled";

import axios from "axios";

export const EventsList = () => {
  const [clientsData, setClientsData] = useState(null);
  const [activeClient, setActiveClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleClientClick = (client) => {
    setActiveClient(client);
  };

  const handleModalClose = () => {
    setActiveClient(null);
  };

  const handleRemoveClient = (id) => {
    if (window.confirm(`Do you want to remove ?`)) {
      fetch(`http://localhost:5000/clients/` + id, { method: "DELETE" })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };

  useEffect(() => {
    axios("http://localhost:5000/clients")
      .then((res) => {
        setClientsData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const mappedClients = useMemo(() => {
    return clientsData?.map((client) => (
      <Events
        key={client.id}
        client={client}
        onRemove={handleRemoveClient}
        onEdit={handleClientClick}
      />
    ));
  }, [clientsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("client", clientsData);

  return (
    <EventsListBox>
      <EventsListContainer style={{ display: "flex", flexWrap: "wrap" }}>
        {mappedClients}
      </EventsListContainer>
      <EditClientModal
        activeClient={activeClient}
        handleModalClose={handleModalClose}
      />
    </EventsListBox>
  );
};

import { useEffect, useState, useMemo } from "react";
import { Events } from "./Events";

import axios from "axios";

export const EventsList = () => {
  const [clientsData, setClientsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      .catch((err) => console.log(err));
  }, []);

  const mappedClients = useMemo(() => {
    return clientsData?.map((client) => (
      <Events key={client.id} client={client} onClick={handleRemoveClient} />
    ));
  }, [clientsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("client", clientsData);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{mappedClients}</div>
    </>
  );
};

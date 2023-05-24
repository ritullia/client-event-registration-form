import { useEffect, useState, useMemo } from "react";
import { Events } from "./Events";

// import axios from "axios";

export const EventsList = () => {
  const [clientsData, setClientsData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((res) => res.json())
      .then((clientsData) => {
        setClientsData(clientsData);
        setIsLoading(false);
      });
  }, []);

  const mappedClients = useMemo(() => {
    return clientsData.map((client) => (
      <Events key={client.id} client={client} />
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

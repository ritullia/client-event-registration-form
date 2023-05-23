import { useEffect, useState } from "react";

import { ClientCard } from "./ClientCard";
// import { ClientContext } from "../reducerForClients/ClientContext";
import axios from "axios";

export const EventsList = () => {
  const [clients, setClients] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:5000/clients`)
      .then((res) => {
        setClients(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteClient = (client) => {
    setClients(client);
    alert(`${client.name} pasalintas is saraso`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("client", clients);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {clients
          ?.filter((client) => client.id)
          .map((client) => {
            return (
              <ClientCard
                client={client}
                key={client.id}
                onClick={deleteClient}
              />
            );
          })}
      </div>
    </>
  );
};

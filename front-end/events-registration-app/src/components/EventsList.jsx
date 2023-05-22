import { useEffect, useState } from "react";
import { Events } from "./Events";
import axios from "axios";

export const EventsList = () => {
  const [clients, setClients] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:5000/user")
      .then((res) => {
        setClients(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("clients", clients);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {clients.map((client) => (
          <Events client={client} />
        ))}
      </div>
    </>
  );
};

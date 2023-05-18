import { Events } from "./Events";

export const EventsList = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Events />
        <Events />
        <Events />
        <Events />
      </div>
    </>
  );
};

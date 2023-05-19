export const Footer = () => {
  return (
    <>
      <div style={{ background: "black" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            color: "grey",
            fontSize: "15px",
          }}
        >
          <div>
            <h3>All about events</h3>
          </div>
          <div>
            <h3>Contacts</h3>
          </div>
          <div>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/admin">Admin panel</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

import styled from "styled-components";

export const EventsListBox = styled.div`
  margin: 40px 80px;
`;

export const EventsListContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr;
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 4fr;
    grid-gap: 10px;
  }
`;

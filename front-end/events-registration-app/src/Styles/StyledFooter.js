import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 40px;
  background-color: #393939;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Heading = styled.h3`
  font-size: 22px;
  color: #3dcacd;
  margin-bottom: 40px;
  font-weight: 600;
`;

export const FooterLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const FooterLink = styled.a`
  color: #3dcacd;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #2da8aa;
    transition: 200ms ease-in;
  }
`;

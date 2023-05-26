import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ContainerBody = styled.div`
  margin: 80px;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const ContainerText = styled.h2`
  font-size: 56px;
  font-family: "Pacifico", cursive;
  font-weight: 600;
  text-align: center;
  color: #f56476;
`;

export const CardContainer = styled(Card)`
  height: 380px;
  box-shadow: 0px 1px 10px 1px grey;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

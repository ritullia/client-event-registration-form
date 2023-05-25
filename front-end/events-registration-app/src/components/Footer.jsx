import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";
import {
  Box,
  Container,
  ColumnInfo,
  Row,
  Heading,
  FooterLink,
  FooterLinkContainer,
} from "../Styles/StyledFooter";

export const Footer = ({ isLoding }) => {
  const { isSignedIn } = useContext(AuthenticationContext);
  if (isLoding) {
    return;
  }
  return (
    <>
      <Box>
        {isSignedIn ? (
          <>
            <Container>
              <Row>
                <ColumnInfo>
                  <Heading>All about events</Heading>
                  <FooterLinkContainer>
                    <FooterLink>
                      <FooterLink href="/">Party</FooterLink>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/">Theatre</FooterLink>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/">Concerts</FooterLink>
                    </FooterLink>
                  </FooterLinkContainer>
                </ColumnInfo>
                <ColumnInfo>
                  <Heading>Contacts</Heading>
                  <FooterLinkContainer>
                    <FooterLink>
                      <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: "10px" }}>Facebook</span>
                      </i>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/">Theatre</FooterLink>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/">Concerts</FooterLink>
                    </FooterLink>
                  </FooterLinkContainer>
                </ColumnInfo>
                <ColumnInfo>
                  <Heading>Links</Heading>
                  <FooterLinkContainer>
                    <FooterLink>
                      <FooterLink href="/clients">Clients</FooterLink>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/admin">Admin panel</FooterLink>
                    </FooterLink>
                  </FooterLinkContainer>
                </ColumnInfo>
              </Row>
            </Container>
          </>
        ) : (
          <>
            <Container>
              <Row>
                <ColumnInfo>
                  <Heading>All about events</Heading>

                  <FooterLinkContainer>
                    <FooterLink>
                      <FooterLink href="/">Party</FooterLink>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/">Theatre</FooterLink>
                    </FooterLink>
                    <FooterLink>
                      <FooterLink href="/">Concerts</FooterLink>
                    </FooterLink>
                  </FooterLinkContainer>
                </ColumnInfo>
                <ColumnInfo>
                  <Heading>Contacts</Heading>
                </ColumnInfo>
              </Row>
            </Container>
          </>
        )}
      </Box>
    </>
  );
};

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
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

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
                  <Heading>Social media</Heading>
                  <FooterLinkContainer>
                    <FooterLink>
                      <FaFacebookSquare />
                    </FooterLink>
                    <FooterLink>
                      <FaLinkedin />
                    </FooterLink>
                    <FooterLink>
                      <FaInstagramSquare />
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
                  <Heading>Social media</Heading>
                  <FooterLinkContainer>
                    <FooterLink>
                      <FaFacebookSquare />
                    </FooterLink>
                    <FooterLink>
                      <FaLinkedin />
                    </FooterLink>
                    <FooterLink>
                      <FaInstagramSquare />
                    </FooterLink>
                  </FooterLinkContainer>
                </ColumnInfo>
              </Row>
            </Container>
          </>
        )}
      </Box>
    </>
  );
};

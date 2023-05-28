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
  FooterLinks,
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
                    <FooterLinks>
                      <FooterLink href="/">Party</FooterLink>
                    </FooterLinks>
                    <FooterLinks>
                      <FooterLink href="/">Theatre</FooterLink>
                    </FooterLinks>
                    <FooterLinks>
                      <FooterLink href="/">Concerts</FooterLink>
                    </FooterLinks>
                  </FooterLinkContainer>
                </ColumnInfo>
                <ColumnInfo>
                  <Heading>Social media</Heading>
                  <FooterLinkContainer>
                    <FooterLink>
                      <FaFacebookSquare />
                      <FaLinkedin />
                      <FaInstagramSquare />
                    </FooterLink>
                  </FooterLinkContainer>
                </ColumnInfo>
                <ColumnInfo>
                  <Heading>Links</Heading>
                  <FooterLinkContainer>
                    <FooterLinks>
                      <FooterLink href="/clients">Clients</FooterLink>
                    </FooterLinks>
                    <FooterLinks>
                      <FooterLink href="/admin">Admin panel</FooterLink>
                    </FooterLinks>
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
                    <FooterLinks>
                      <FooterLink href="/">Party</FooterLink>
                    </FooterLinks>
                    <FooterLinks>
                      <FooterLink href="/">Theatre</FooterLink>
                    </FooterLinks>
                    <FooterLinks>
                      <FooterLink href="/">Concerts</FooterLink>
                    </FooterLinks>
                  </FooterLinkContainer>
                </ColumnInfo>
                <ColumnInfo>
                  <Heading>Social media</Heading>
                  <FooterLinkContainer>
                    <FooterLinks>
                      <FaFacebookSquare />
                      <FaLinkedin />
                      <FaInstagramSquare />
                    </FooterLinks>
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

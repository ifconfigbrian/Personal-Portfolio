import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:+254114399034">+254114399034</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:njugunabriian@gmail.com">njugunabriian@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turning Ideas To Code</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://instagram.com">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://twitter.com">
      <AiFillTwitterCircle size="3rem"/>
    </SocialIcons>
    </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

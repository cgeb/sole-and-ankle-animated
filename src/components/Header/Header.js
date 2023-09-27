import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLinkWrapper>
            <MainNavLink href="/sale">Sale</MainNavLink>
            <HoveredNavLink href="/sale" aria-hidden={true}>Sale</HoveredNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <MainNavLink href="/new">New&nbsp;Releases</MainNavLink>
            <HoveredNavLink href="/new" aria-hidden={true}>New&nbsp;Releases</HoveredNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <MainNavLink href="/men">Men</MainNavLink>
            <HoveredNavLink href="/men" aria-hidden={true}>Men</HoveredNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <MainNavLink href="/kids">Kids</MainNavLink>
            <HoveredNavLink href="/kids" aria-hidden={true}>Kids</HoveredNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <MainNavLink href="/women">Women</MainNavLink>
            <HoveredNavLink href="/women" aria-hidden={true}>Women</HoveredNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <MainNavLink href="/collections">Collections</MainNavLink>
            <HoveredNavLink href="/collections" aria-hidden={true}>Collections</HoveredNavLink>
          </NavLinkWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLinkWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const NavLink = styled.a`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);

  ${NavLinkWrapper}:first-of-type & {
    color: var(--color-secondary);
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transform: translateY(var(--translate-from));
    transition: transform 500ms;

    ${NavLinkWrapper}:hover & {
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainNavLink = styled(NavLink)`
  font-weight: ${WEIGHTS.medium};
  --translate-from: 0%;
  --translate-to: -100%;
`

const HoveredNavLink = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --translate-from: 100%;
  --translate-to: 0%;
`;

export default Header;

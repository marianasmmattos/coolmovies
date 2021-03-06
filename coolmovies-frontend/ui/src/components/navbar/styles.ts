import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyles';

export const NavbarContainer = styled(Container)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  position: sticky;
  background: rgba(47,0,0,0.78);
  box-shadow: -2px 21px 40px 1px rgba(0,0,0,0.45);
  width: 100%;
  z-index: 10;
`;

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  transition: all .2s ease;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  color: #fff;

  @media (min-width: 475px){
    font-size: 16px;
  }

  &:hover {
    color: #E38B06;
  }

  &:active {
    color: #E38B06;
  }
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  transition: all .2s ease;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  font-family: Bebas Neue, sans-serif;

  @media (min-width: 475px){
    font-size: 24px;
  }

  svg {
    margin-right: 10px;
    font-size: 22px;
  }
`;

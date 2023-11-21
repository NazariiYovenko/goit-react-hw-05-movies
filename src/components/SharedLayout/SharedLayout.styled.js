import { BiHomeHeart, BiMoviePlay } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  border-bottom: thick double black;
  padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: black;
  text-decoration: none;
  font-weight: 400;
  font-size: large;
  margin-right: 25px;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: green;
  }
  &.active {
    color: green;
    border: 3px solid green;
    border-radius: 5px;
    font-weight: 600;
  }
`;

const IconBase = `
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

export const StyledHomeIcon = styled(BiHomeHeart)`
  ${IconBase}
`;

export const StyledMovieIcon = styled(BiMoviePlay)`
  ${IconBase}
`;

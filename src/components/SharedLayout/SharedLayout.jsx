import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledHomeIcon,
  StyledMovieIcon,
  StyledNav,
  StyledNavLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">
          <StyledHomeIcon />
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">
          <StyledMovieIcon />
          Movies
        </StyledNavLink>
      </StyledNav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

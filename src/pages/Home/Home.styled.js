import { BiFilm } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  padding: 20px;
`;

export const StyledTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StyledMovieList = styled.ul`
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
`;

export const StyledMovieItem = styled.li`
  margin-bottom: 20px;
`;

export const StyledMovieLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  font-weight: 400;
  font-size: large;
  margin-right: 25px;
  display: inline-flex;
  align-items: center;
  color: black;
  &:hover {
    color: green;
  }
`;

export const StyledMovieIcon = styled(BiFilm)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

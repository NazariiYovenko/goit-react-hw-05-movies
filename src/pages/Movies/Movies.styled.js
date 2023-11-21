import styled from 'styled-components';
import { BiFilm } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 25px;
`;
export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
`;
export const Btn = styled.button`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid green;
  &:hover {
    cursor: pointer;
    background-color: green;
  }
`;
export const MoviesList = styled.ul`
  margin-top: 20px;
`;
export const MoviesListItem = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  &:hover {
    color: green;
    font-weight: 500;
  }
`;

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

import { BiCommentDetail, BiGroup } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieContainer = styled.div`
  padding: 20px;
`;

export const StyledButtonsList = styled.ul`
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  display: flex;
  gap: 30px;
`;

export const BtnBack = styled.button`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid green;
  &:hover {
    cursor: pointer;
    background-color: green;
    font-weight: 500;
  }
  &.active {
    background-color: green;
    font-weight: 500;
    color: black;
  }
`;

export const StyledButton = styled.li`
  margin-bottom: 20px;
  border: 3px black solid;
  border-radius: 5px;
  &:hover {
    border-color: green;
  }
`;

export const StyledButtonLink = styled(Link)`
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

const IconBase = `
 height: 20px;
 width: 20px; 
 margin-right: 10px;
`;

export const StyledCastIcon = styled(BiGroup)`
  ${IconBase}
`;

export const StyledReviewsIcon = styled(BiCommentDetail)`
  ${IconBase}
`;

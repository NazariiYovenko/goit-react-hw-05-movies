import React, { useEffect, useState } from 'react';
import {
  StyledHomeContainer,
  StyledMovieIcon,
  StyledMovieItem,
  StyledMovieLink,
  StyledMovieList,
  StyledTitle,
} from './Home.styled';
import { fetchTrendingFilms } from 'services/apiFilms';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchFilmes = async () => {
      try {
        const filmsList = await fetchTrendingFilms();
        setMovieList(filmsList.results);
      } catch (error) {
        toast.error(error.message);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmes();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <StyledHomeContainer>
      <StyledTitle>Treanding Today</StyledTitle>
      <StyledMovieList>
        {movieList.map(movie => {
          return (
            <StyledMovieItem key={movie.id}>
              <StyledMovieLink to={`movies/${movie.id}`}>
                <StyledMovieIcon />
                {movie.title}
                {movie.name}
              </StyledMovieLink>
            </StyledMovieItem>
          );
        })}
      </StyledMovieList>
    </StyledHomeContainer>
  );
};

export default Home;

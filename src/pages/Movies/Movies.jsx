import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeyword } from 'services/apiFilms';
import {
  Btn,
  Input,
  Section,
  StyledMovieIcon,
  StyledMovieItem,
  StyledMovieLink,
  StyledMovieList,
} from './Movies.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  // const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const keyword = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (keyword === '' || keyword === null) {
      return;
    }
    setLoading(true);
    const fetchFilmes = async () => {
      try {
        const filmsList = await fetchMoviesByKeyword(keyword);
        if (!filmsList.results.length) {
          toast.error('Try again with another search word');
        }
        setMovieList(filmsList.results);
      } catch (error) {
        toast.error(error.message);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmes();
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.query.value === '') {
      return;
    }
    setSearchParams({ query: form.query.value });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Btn type="submit">
          <AiOutlineSearch size="20" />
        </Btn>
      </form>
      <StyledMovieList>
        {movieList.map(movie => {
          return (
            <StyledMovieItem
              key={movie.id}
              state={{ from: location }}
              to={`/movies/${movie.id}`}
            >
              <StyledMovieLink
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                <StyledMovieIcon />
                {movie.title}
                {movie.name}
              </StyledMovieLink>
            </StyledMovieItem>
          );
        })}
      </StyledMovieList>
    </Section>
  );
};

export default Movies;

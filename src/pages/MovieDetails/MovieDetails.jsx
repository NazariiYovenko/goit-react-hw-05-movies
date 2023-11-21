import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  StyledCastIcon,
  StyledMovieContainer,
  StyledButton,
  StyledButtonLink,
  StyledButtonsList,
  StyledReviewsIcon,
  BtnBack,
} from './MovieDetails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { fetchMovieDetalsById } from 'services/apiFilms';
import FilmCard from 'components/FilmCard/FilmCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchFilmes = async () => {
      try {
        const filmDetails = await fetchMovieDetalsById(movieId);
        setMovieDetails(filmDetails);
      } catch (error) {
        toast.error(error.message);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmes();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  const { original_title, overview, vote_average, genres, backdrop_path } =
    movieDetails;
  return (
    <StyledMovieContainer>
      <BtnBack onClick={() => navigate(location.state?.from ?? '/')}>
        <AiOutlineArrowLeft size="20" />
      </BtnBack>
      <FilmCard
        original_title={original_title}
        overview={overview}
        vote_average={vote_average}
        genres={genres}
        backdrop_path={backdrop_path}
      />
      <StyledButtonsList>
        <StyledButton>
          <StyledButtonLink to="cast" state={location.state}>
            <StyledCastIcon /> Cast
          </StyledButtonLink>
        </StyledButton>
        <StyledButton>
          <StyledButtonLink to="reviews" state={location.state}>
            <StyledReviewsIcon /> Reviews
          </StyledButtonLink>
        </StyledButton>
      </StyledButtonsList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </StyledMovieContainer>
  );
};

export default MovieDetails;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import { Section, CastList, CastItem } from './Cast.styled';
import { fetchMovieCastById } from 'services/apiFilms';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchCasts = async () => {
      try {
        const castDetails = await fetchMovieCastById(movieId);
        setCast(castDetails.cast);
      } catch (error) {
        toast.error(error.message);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCasts();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  const NO_IMAGE =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

  return cast.length ? (
    <Section>
      <CastList>
        {cast.map(({ name, character, profile_path }) => (
          <CastItem key={name}>
            <img
              src={!!profile_path ? IMG_PATH + profile_path : NO_IMAGE}
              alt={name}
            />
            <p>Actor: {name}</p>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
    </Section>
  ) : (
    <Section>
      <p>Cast list is empty</p>
    </Section>
  );
};

export default CastPage;

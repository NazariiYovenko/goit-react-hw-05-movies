import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import { Section, ReviewsList } from './Reviews.styled';
import { fetchMovieReviewsById } from 'services/apiFilms';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchReviews = async () => {
      try {
        const reviewsDetails = await fetchMovieReviewsById(movieId);
        setReviews(reviewsDetails.results);
      } catch (error) {
        toast.error(error.message);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }
  return reviews.length ? (
    <Section>
      <ReviewsList>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ReviewsList>
    </Section>
  ) : (
    <Section>
      <p>Reviews list is empty</p>
    </Section>
  );
};

export default Reviews;

import axios from 'axios';

export async function fetchTrendingFilms() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NGViZDBjYzM5NDI5YzhkY2U5MTEzMzdiN2E5OSIsInN1YiI6IjY1MzdmYjM3MGZiMTdmMDBlMTE1YjI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRUvoOmYpC_cyISJmScsHiaLibDK9sFe9mwNYjdNfyc',
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function fetchMovieDetalsById(id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NGViZDBjYzM5NDI5YzhkY2U5MTEzMzdiN2E5OSIsInN1YiI6IjY1MzdmYjM3MGZiMTdmMDBlMTE1YjI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRUvoOmYpC_cyISJmScsHiaLibDK9sFe9mwNYjdNfyc',
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function fetchMovieCastById(id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NGViZDBjYzM5NDI5YzhkY2U5MTEzMzdiN2E5OSIsInN1YiI6IjY1MzdmYjM3MGZiMTdmMDBlMTE1YjI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRUvoOmYpC_cyISJmScsHiaLibDK9sFe9mwNYjdNfyc',
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function fetchMovieReviewsById(id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NGViZDBjYzM5NDI5YzhkY2U5MTEzMzdiN2E5OSIsInN1YiI6IjY1MzdmYjM3MGZiMTdmMDBlMTE1YjI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRUvoOmYpC_cyISJmScsHiaLibDK9sFe9mwNYjdNfyc',
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function fetchMoviesByKeyword(keyword) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie`,
    params: { language: 'en-US', query: keyword, page: 1 },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTE2NGViZDBjYzM5NDI5YzhkY2U5MTEzMzdiN2E5OSIsInN1YiI6IjY1MzdmYjM3MGZiMTdmMDBlMTE1YjI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRUvoOmYpC_cyISJmScsHiaLibDK9sFe9mwNYjdNfyc',
    },
  };

  const response = await axios.request(options);
  return response.data;
}

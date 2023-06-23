import type { NextPage } from 'next';
import Header from '../components/Header';
import GridLayout from '../components/GridLayout/gridLayout';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import fetcher from '../wrapper/fetcher';
import { Movie } from '../types';
import Pagination from '../components/Pagination/pagination';
import { useRouter } from 'next/router';
import useAuthProvider from '../provider/authProvider';

const Home: NextPage = () => {
  const router = useRouter();
  const q = router.query.q;
  const [moviesData, setMoviesData] = useState<Movie[] | []>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { isAuthenticated } = useAuthProvider();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetcher(`https://api.themoviedb.org/3/search/movie?query=${q}&page=${page}`)
      .then((res) => res.json())
      .then((res) => setMoviesData(res.results));

    if (isAuthenticated()) {
      fetch('api/favorite', { method: 'GET' })
        .then((res) => res.json())
        .then((res) => setFavorites(res.data));
    }
  }, [page, q, isAuthenticated]);

  return (
    <>
      <Header />
      <GridLayout>
        {moviesData ? (
          moviesData.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              overview={movie.overview}
              posterUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date.slice(0, 4)}
              voteAverage={movie.vote_average}
              movieId={movie.id}
              favorited={favorites.includes(movie.id.toString())}
            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </GridLayout>
      <Pagination
        page={page}
        setPage={(newPage: number) => {
          setPage(newPage);
        }}
      />
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Header from '../components/Header';
import GridLayout from '../components/GridLayout/gridLayout';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import fetcher from '../wrapper/fetcher';
import URLs from '../constants/urls';
import { Movie } from '../types';

const Home: NextPage = () => {
  const [moviesData, setMoviesData] = useState<Movie[] | []>([]);

  useEffect(() => {
    fetch('api/favorite', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        Promise.all(
          res.data.map((id: string) =>
            fetcher(
              `https://api.themoviedb.org/3/movie/${id}?language=en-US`
            ).then((res) => res.json())
          )
        ).then((res) => {
          setMoviesData(res);
        });
      });
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold m-6">Favorites ♥️</h1>
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
              favorited
            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </GridLayout>
    </>
  );
};

export default Home;

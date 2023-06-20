import type { NextPage } from 'next';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard/movieCard';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MovieCard />
    </>
  );
};

export default Home;

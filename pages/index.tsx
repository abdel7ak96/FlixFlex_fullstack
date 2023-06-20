import type { NextPage } from 'next';
import Header from '../components/Header';
import GridLayout from '../components/GridLayout/gridLayout';
import MovieCard from '../components/MovieCard';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <GridLayout>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </GridLayout>
    </>
  );
};

export default Home;

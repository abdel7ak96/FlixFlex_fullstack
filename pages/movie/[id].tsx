import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';
import fetcher from '../../wrapper/fetcher';
import URLs from '../../constants/urls';
import { Movie } from '../../types';

const Movie: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [trailer, setTrailer] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (id) {
      fetcher(URLs.movieDetails + id + '?language=en-US')
        .then((res) => res.json())
        .then((res) => setMovie(res));

      fetcher(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
        .then((res) => res.json())
        .then((res) => {
          const { key } = res.results.find(
            (video: any) => video.type.toLowerCase() == 'trailer'
          );
          setTrailer(key);
        });
    }
  }, [id]);

  return (
    <>
      <Header />
      {movie ? (
        <>
          <div
            className={`h-96 relative bg-no-repeat bg-cover bg-[url("https://image.tmdb.org/t/p/w780${movie.backdrop_path}")]`}
          ></div>
          <div className="relative flex bottom-20 left-10">
            <div className="w-56">
              <Image
                src={`${URLs.imagesUrl}w200${movie.poster_path}`}
                width={1}
                height={1.45}
                layout="responsive"
                alt="Movie poster"
                priority
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="flex-1 self-end p-5">
              <h2 className="font-bold text-4xl my-4">{`${
                movie.title
              } (${movie.release_date.slice(0, 4)})`}</h2>
              <p className="line-clamp-3">{movie.overview}</p>
              <p className="my-2">
                <span className="font-bold">Genre:</span> {movie.genre_ids}
              </p>
              <p className="text-3xl">
                <span className="font-bold">{movie.vote_average}</span>/10
              </p>
            </div>
          </div>
          <div className="ml-10">
            <h2 className="text-3xl font-bold">Watch trailer</h2>
            <YouTube videoId={trailer} />
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Movie;

import Image from 'next/image';
import { HeartIcon } from '../Icons';
import URLs from '../../constants/urls';
import Link from 'next/link';

const MovieCard = ({
  posterUrl,
  title,
  year,
  overview,
  voteAverage,
  movieId,
}: {
  posterUrl: string;
  title: string;
  year: string;
  overview: string;
  voteAverage: number;
  movieId: number;
}) => {
  return (
    <Link href={`/movie/${movieId}`}>
      <div className="w-64 shadow-md rounded-xl relative cursor-pointer">
        <button className="absolute z-10 right-4 top-4 bg-black/50 hover:bg-black/75 rounded-full p-2">
          <HeartIcon
            className="h-6"
            fill="none"
            stroke="white"
            strokeWidth={1.5}
          />
        </button>
        <Image
          src={`${URLs.imagesUrl}w200${posterUrl}`}
          width={150}
          height={200}
          layout="responsive"
          alt="Movie poster"
          priority
          className="rounded-t-xl"
        />
        <div className="pt-2 p-4">
          <div className="flex justify-between items-center my-1">
            <h2 className="text-md font-bold">{`${title} (${year})`}</h2>
            <span className="text-xs">
              <span className="font-bold">{voteAverage}</span>/10
            </span>
          </div>
          <p className="text-[10px] line-clamp-3 text-gray-400">{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

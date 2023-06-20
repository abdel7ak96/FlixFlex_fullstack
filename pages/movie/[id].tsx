import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Image from 'next/image';
import YouTube from 'react-youtube';

const Movie: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Header />
      <div className='h-96 relative bg-[url("https://image.tmdb.org/t/p/w780//6l1SV3CWkbbe0DcAK1lyOG8aZ4K.jpg")]'></div>
      <div className="relative flex bottom-20 left-10">
        <div className="w-56">
          <Image
            src="https://image.tmdb.org/t/p/w200/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            width={1}
            height={1.45}
            layout="responsive"
            alt="Movie poster"
            priority
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="flex-1 self-end p-5">
          <h2 className="font-bold text-4xl my-4">Movie title (2010)</h2>
          <p className="line-clamp-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            distinctio, rerum aperiam eum dolorum tempore quam dicta ab facere
            ullam. Aperiam harum sint iusto quos, magni veniam vero molestias
            incidunt.Ì
          </p>
          <p className="my-2">
            <span className="font-bold">Genre:</span> Action
          </p>
          <p className="text-3xl font-bold">8/10</p>
        </div>
      </div>
      <div className='ml-10'>
        <h2 className='text-3xl font-bold'>Watch trailer</h2>
        <YouTube videoId="32RAq6JzY-w" />
      </div>
    </>
  );
};

export default Movie;

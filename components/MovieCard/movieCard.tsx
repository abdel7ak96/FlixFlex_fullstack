import Image from "next/image";
import { HeartIcon } from "../Icons";

const MovieCard = () => {
  return (
    <div className="w-64 shadow-md rounded-xl relative cursor-pointer m-10">
      <button className="absolute z-10 right-4 top-4 bg-black/50 hover:bg-black/75 rounded-full p-2">
        <HeartIcon className="h-6" fill="none" stroke="white" strokeWidth={1.5} />
      </button>
      <Image
        src='https://image.tmdb.org/t/p/w200/fiVW06jE7z9YnO4trhaMEdclSiC.jpg'
        width={150}
        height={200}
        layout="responsive"
        alt="Movie poster"
        priority
        className="rounded-t-xl"
      />
      <div className="pt-2 p-4">
        <div className="flex justify-between items-center my-1">
          <h2 className="text-md font-bold">Movie title (2018)</h2>
          <span className="text-xs">5/10</span>
        </div>
        <p className="text-[10px] line-clamp-3 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis deserunt repellat, fugiat, neque harum magni vero sit provident earum ratione animi? Aperiam iste reprehenderit quam libero, dolor doloribus veniam obcaecati.</p>
      </div>
    </div>
  )
}

export default MovieCard;
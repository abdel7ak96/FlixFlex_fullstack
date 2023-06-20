import { ReactNode } from "react";
import MovieCard from "../MovieCard/movieCard";

const GridLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="w-11/12 m-auto flex flex-wrap justify-center gap-8 my-10">
      {children}
    </div>
  )
}

export default GridLayout;
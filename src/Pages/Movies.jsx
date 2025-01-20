import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card"; // Corrected path

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="container grid grid-four--cols">
      {moviesData?.Search ? (
        moviesData.Search.map((curMovie) => (
          <Card key={curMovie.imdbID} curMovie={curMovie} />
        ))
      ) : (
        <p>No movies found or an error occurred..</p>
      )}
    </ul>
  );
};

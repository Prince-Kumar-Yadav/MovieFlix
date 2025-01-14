export const GetMoviesDetails = async ({ params }) => {
  console.log(params); // Verify the structure of params
  const { movieID: id } = params;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null; // Return null if an error occurs
  }
};

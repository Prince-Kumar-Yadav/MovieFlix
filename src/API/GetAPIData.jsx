export const GetMoviesData = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
        }&s=titanic&page=1`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Await the JSON parsing
      return data;
    } catch (error) {
      console.error("Error fetching movies data:", error);
      return null; // Return null if an error occurs
    }
  };
  
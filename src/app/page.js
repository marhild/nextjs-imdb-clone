export const dynamic = "force-dynamic"; // this is the fix
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  // if no genre then fetch trending
  const genre = searchParams.genre || "fetchTrending";

  // if genre not equal to "fetchTopRated" then fetch trending movies
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  // this will be caught by the error page 
  // and passed to the page as props
  if (!res.ok) {
    throw new Error("Failed to fetch data"); 
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

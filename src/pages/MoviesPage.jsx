import { useState, useEffect } from 'react';
import Banner from "../components/Banner.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function MoviesPage() {
  // Stato per memorizzare i film
  const [movies, setMovies] = useState([]);

  // Effettuare il fetch dei dati quando il componente viene montato
  useEffect(() => {
    fetch('http://localhost:3009/api/movies')
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setMovies(data.movies);  // Memorizza i film nello stato
      })
      .catch(error => {
        console.error('There was an error with the fetch operation:', error);
      });
  }, []);  // Il secondo argomento vuoto [] fa sì che l'effetto venga eseguito solo una volta, al primo rendering

  return (
    <>
      <Banner title={'Movies'} subTitle={'The nerdest movies community'} leadtext={'lorem lorem loremo lorem lorem lorem lorem lorem lorem'} />

      <section className="py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {
              // Usa i dati memorizzati nello stato per renderizzare i film
              movies.map(movie => (
                <div className="col" key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

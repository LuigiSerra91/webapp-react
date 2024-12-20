import { useState, useEffect, useContext } from 'react';
import Banner from "../components/Banner.jsx";
import MovieCard from "../components/MovieCard.jsx";
import GlobalContext from '../GlobalContext/GlobalContext.jsx';
import Loader from '../components/Loader.jsx';

export default function MoviesPage() {

  const movies_api_url = 'http://localhost:3009/api/movies'
  // Stato per memorizzare i film
  const [movies, setMovies] = useState([]);
  const { loading, setLoading } = useContext(GlobalContext)
  // Effettuare il fetch dei dati quando il componente viene montato
  useEffect(() => {
    setLoading(true)
    fetch(movies_api_url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setMovies(data.movies);  // Memorizza i film nello stato
        setLoading(false)
      })
      .catch(error => {
        console.error('There was an error with the fetch operation:', error);
      });
  }, []);  // Il secondo argomento vuoto [] fa sì che l'effetto venga eseguito solo una volta, al primo rendering

  return (
    <>

      {loading ? <Loader /> :
        <>
          <Banner title={'Movies'} subTitle={'The nerdest movies community'} leadtext={'lorem lorem loremo lorem lorem lorem lorem lorem lorem'} />

          <section className="py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
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


      }

    </>
  );
}

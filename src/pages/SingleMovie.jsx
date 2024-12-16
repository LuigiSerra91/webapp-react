// Importa i componenti e gli hook necessari per il funzionamento del componente
import { useParams } from "react-router-dom";  // Per ottenere i parametri dell'URL
import Banner from "../components/Banner";      // Per mostrare l'intestazione del film
import ReviewCard from "../components/ReviewCard"; // Per visualizzare ogni recensione
import { useEffect, useState, useContext } from "react";    // Per gestire lo stato e gli effetti
import FormReview from "../components/FormReview"; // Per il modulo di inserimento recensioni
import GlobalContext from '../GlobalContext/GlobalContext'
import Loader from '../components/Loader'
// Componente principale per visualizzare i dettagli di un singolo film
export default function SingleMovie() {
    // Estrae l'id del film dai parametri della rotta
    const { id } = useParams();

    const { loading, setLoading } = useContext(GlobalContext)
    // Crea l'URL per ottenere i dati del film basato sull'id estratto dalla rotta
    const movie_api_url = `http://localhost:3009/api/movies/${id}`;

    // Stato per memorizzare i dettagli del film
    const [movie, setMovie] = useState(null);

    // Stato per memorizzare le recensioni del film
    const [reviews, setReviews] = useState([]);

    // Effetto che viene eseguito quando il componente viene caricato
    useEffect(() => {

        setLoading(true)
        // Esegui la fetch per ottenere i dati del film
        fetch(movie_api_url)
            .then(response => response.json())  // Converte la risposta in formato JSON
            .then(data => {
                console.log(data);  // Logga i dati ottenuti per il debug
                setMovie(data);     // Imposta i dettagli del film nello stato
                setReviews(data.reviews);  // Imposta le recensioni del film nello stato
                setLoading(false)
            })
            .catch(error => {
                console.error('There was an error with the fetch operation:', error);  // Gestisce gli errori nella fetch
            });
    }, [movie_api_url]); // L'effetto dipende dall'URL dell'API, quindi verrà rieseguito se cambia

    // Funzione per aggiungere una nuova recensione allo stato
    const addReview = (newReview) => {
        // Aggiunge la nuova recensione all'elenco delle recensioni precedenti
        setReviews((prevReviews) => [...prevReviews, newReview]);
    };

    // Renderizza il componente
    return (
        <>

            {loading ? <Loader /> :
                <>

                    {/* Condizione per assicurarsi che i dati del film siano stati caricati */}
                    {movie && (
                        <>

                            {/* Mostra il banner con titolo, regista e un riassunto del film */}
                            <Banner title={movie?.title} subTitle={movie?.director} leadtext={movie?.abstract} />

                            {/* Passa l'id del film e la funzione addReview come props al componente del modulo recensioni */}
                            <FormReview movie_id={id} addReview={addReview} />

                            {/* Sezione delle recensioni */}
                            <section className="reviews pb-5">
                                <div className="container">
                                    <h3>Reviews:</h3>
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                                        {/* Mappa le recensioni e crea un componente ReviewCard per ciascuna */}
                                        {reviews.map((review) => (
                                            <ReviewCard key={review.id} review={review} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                </>


            }

        </>
    );
}

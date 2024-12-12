import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import ReviewCard from "../components/ReviewCard"
import { useEffect, useState } from "react";


export default function SingleMovie() {


    const { id } = useParams()
    const movie_api_url = `http://localhost:3009/api/movies/${id}`
    const [movie, setMovie] = useState(null)


    useEffect(() => {
        fetch(movie_api_url)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setMovie(data);  // Memorizza i film nello stato

            })
            .catch(error => {
                console.error('There was an error with the fetch operation:', error);
            });
    }, []);  // Il secondo argomento vuoto [] fa sì che l'effetto venga eseguito solo una volta, al primo rendering



    return (

        <>


            <Banner title={movie?.title} subTitle={movie?.director} leadtext={movie?.abstract} />

            <section className="reviews pb-5">
                <div className="container">
                    {/* All reviews here */}
                    <h3>reviews :</h3>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        {movie && movie.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
                    </div>



                </div>
            </section>



        </>

    )
}
import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import ReviewCard from "../components/ReviewCard"
import { useEffect, useState } from "react";


export default function SingleMovie() {
    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [movieTitle, setMovieTitle] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3009/api/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setReviews(data.reviews);  // Memorizza i film nello stato
                setMovieTitle(data.title)
            })
            .catch(error => {
                console.error('There was an error with the fetch operation:', error);
            });
    }, []);  // Il secondo argomento vuoto [] fa sì che l'effetto venga eseguito solo una volta, al primo rendering



    return (

        <>


            <Banner title={movieTitle} subtitle="By Author name" leadtext="lorem ipsum dolor" />

            <section className="reviews">
                <div className="container">
                    {/* All reviews here */}

                    {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}


                </div>
            </section>



        </>

    )
}
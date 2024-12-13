import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";
import FormReview from "../components/FormReview";

export default function SingleMovie() {
    const { id } = useParams();
    const movie_api_url = `http://localhost:3009/api/movies/${id}`;
    const [movie, setMovie] = useState(null);


    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(movie_api_url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovie(data);
                setReviews(data.reviews);
            })
            .catch(error => {
                console.error('There was an error with the fetch operation:', error);
            });
    }, [movie_api_url]);


    const addReview = (newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
    };

    return (
        <>
            {movie && (
                <>
                    <Banner title={movie?.title} subTitle={movie?.director} leadtext={movie?.abstract} />
                    <FormReview movie_id={id} addReview={addReview} /> {/* Passa addReview come prop */}
                    <section className="reviews pb-5">
                        <div className="container">
                            <h3>Reviews:</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                                {reviews.map((review) => (
                                    <ReviewCard key={review.id} review={review} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

import AvarageStars from '../components/AvarageStars.jsx'
export default function ReviewCard({ review, movie }) {
    return (
        <div className="review card mb-3">
            <div className="card-body">

                <span> By : {review.name}</span>
                <div className="vote mt-3">
                    <strong>Vote: {AvarageStars(review.vote)}</strong>
                </div>
                <p>{review.text}</p>
            </div>
        </div>
    )

}
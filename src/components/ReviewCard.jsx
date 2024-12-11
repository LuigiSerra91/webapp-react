export default function ReviewCard({ review }) {
    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{review.review}</p>
                <span> By : {review.name}</span>
                <div className="vote mt-3">
                    <strong>Vote: {review.vote}</strong>
                </div>
                <p>{review.text}</p>
            </div>
        </div>
    )

}
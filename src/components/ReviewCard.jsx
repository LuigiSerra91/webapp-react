export default function ReviewCard(review) {
    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{review.review}</p>
                <span> By : {review.username}</span>
                <div className="vote mt-3">
                    <strong>Vote: {review.vote}</strong>
                </div>
            </div>
        </div>
    )

}
export default function AppStars(vote) {

    const oneToFive = Math.ceil(vote * 0.5)
    const stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= oneToFive) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
        } else {
            stars.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
        }
    }

    return stars
}
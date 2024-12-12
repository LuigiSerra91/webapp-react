import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {


    return (
        <div className="movie card">
            <div className="card-header">
                <h4>{movie.title}</h4>
            </div>
            <div className="card-body bg-black text-white">
                <img className="img-card" src={movie.image} alt="" style={{ width: '150px' }} />
                <div className="text-danger">By <span>{movie.director}</span></div>
                <p className="overview mb-3">
                    {movie.abstract}
                </p>
                <p className="text-success"><strong>{movie.release_year}</strong></p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    );

}
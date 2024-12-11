import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {


    return (
        <div className="movie card">
            <div className="card-header ">
                <h4>{movie.title}</h4>
            </div>
            <div className="card-body">
                <span className="text-muted">By <span>{movie.director}</span></span>
                <p className="overview mb-3">
                    {movie.abstract}
                </p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    );

}
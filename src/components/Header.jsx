import { NavLink } from "react-router-dom"
export default function Header() {


    return (
        <header className='bg-secondary py-3 px-4 shadow'>
            <nav>
                <NavLink to="/" className="text-decoration-none">
                    <strong className="text-white">Movies</strong>
                </NavLink>
            </nav>
        </header>
    )
}
import { Outlet } from "react-router-dom"
export default function DefaultLayout() {
    return (
        <>
            <header>Welcome to Layout</header>
            <main><Outlet /></main>
            <footer> welcome to footer</footer>

        </>
    )
}
import { BrowserRouter, Routes, Route } from "react-router"
import DefaultLayout from "./layout/DefaultLayout.jsx"
import MoviesPage from "./pages/MoviesPage.jsx"
import SingleMovie from "./pages/SingleMovie.jsx"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MoviesPage />}></Route>
            <Route path="movies/:id" element={<SingleMovie />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

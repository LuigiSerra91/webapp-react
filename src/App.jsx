import { BrowserRouter, Routes, Route } from "react-router"
import { useState } from "react"
import DefaultLayout from "./layout/DefaultLayout.jsx"
import MoviesPage from "./pages/MoviesPage.jsx"
import SingleMovie from "./pages/SingleMovie.jsx"
import GlobalContext from './GlobalContext/GlobalContext.jsx'

function App() {
  const [loading, setLoading] = useState(false)
  const values = {
    loading,
    setLoading
  }

  return (
    <>
      <GlobalContext.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<MoviesPage />}></Route>
              <Route path="movies/:id" element={<SingleMovie />}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>



    </>
  )
}

export default App

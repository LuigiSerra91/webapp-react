import { BrowserRouter, Routes, Route } from "react-router"
import DefaultLayout from "./layout/DefaultLayout.jsx"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<h1>Hello</h1>}></Route>
            <Route path="users" element={<h2>User List</h2>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

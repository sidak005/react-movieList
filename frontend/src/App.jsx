import "./css/App.css";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  // App is a component
  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
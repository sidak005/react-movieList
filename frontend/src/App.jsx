import "./css/App.css";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Favourites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  // App is a component
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
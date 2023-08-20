import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './view/Home';
import MovieDetails from './view/MovieDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie-details/:movieId' element={<MovieDetails />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

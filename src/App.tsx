import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Home from './view/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

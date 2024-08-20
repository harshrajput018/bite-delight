import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Main from './components/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './components/booking';

function App() {
  return (
    <BrowserRouter className="App">
      <div className="App">
    <Routes>
    <Route path="/book" element={<Booking />} />
    <Route path='/' element={<Main/>}/>
    
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

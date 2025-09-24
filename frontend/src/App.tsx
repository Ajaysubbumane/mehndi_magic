import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Gallery from './pages/Gallery';
import DesignerProfile from './pages/DesignerProfile';
import Upload from './pages/Upload';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/designs" element={<Gallery />} />
        <Route path="/designer/:id" element={<DesignerProfile />} />
        <Route path="/designer/:id/book" element={<Booking />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
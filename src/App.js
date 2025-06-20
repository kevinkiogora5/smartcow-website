// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/bootstrap.css';
import './assets/css/meanmenu.css';
import './assets/css/animate.css';
import './assets/css/swiper-bundle.css';
import './assets/css/backtotop.css';
import './assets/css/nice-select.css';
import './assets/css/spacing.css';
import './assets/css/header.css';
import './assets/css/hero.css';
import './assets/css/default.css';
import './assets/css/background.css';
import './assets/css/button.css';
import './assets/css/footer.css';
import './assets/css/service.css';
import './assets/css/product.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Academy from './pages/Academy/Academy';
import Offer from './pages/Offer/Offer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={<Home />} />
          
          {/* About Route */}
          <Route path="/about" element={<About />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          
          {/* News and Updates Route */}
          <Route path="/news" element={<News />} />
          
          {/* SmartCow Academy Route */}
          <Route path="/academy" element={<Academy />} />
          
          {/* What We Offer Route */}
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
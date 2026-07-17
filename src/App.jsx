import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return(
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-black text-light d-flex flex-column min-vh-100">
        <Navigation />
        <main className="pt-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
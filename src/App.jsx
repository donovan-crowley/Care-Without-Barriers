import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Adjust path if needed
import Footer from './components/Footer';         // Adjust path if needed
import Hero from './components/Hero';
import About from './components/About';
import Use from './components/Use';               // Your Screenings/About component
import Events from './components/Events';
import Affiliates from './components/Affiliates';
import Contact from './components/Contact';
import Leadership from './pages/Leadership'; // Your new leadership component

// Home page layout combining all your main landing page sections
function Home() {
  const location = useLocation();

    useEffect(() => {
        // Check if there is a scrollTo target in the state
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                
                // Optional: Clear the state so it doesn't scroll again on refresh
                window.history.replaceState({}, document.title);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Use />
            <Events />
            <Affiliates />
            <Contact />
        </>
    );
}

export default function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                {/* Navbar stays persistent on all pages */}
                <Navigation />

                {/* Main content switches based on the route */}
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/leadership" element={<Leadership />} />
                    </Routes>
                </div>

                {/* Footer stays persistent on all pages */}
                <Footer />
            </div>
        </Router>
    );
}
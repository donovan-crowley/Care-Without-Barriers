import Hero from './Hero';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
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
    
    return(
        <>
            <Hero />
        </>
    );
}
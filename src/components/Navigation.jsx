import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navigation () {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (link) => {
        // Handle Leadership differently (switch page)
        if (link === 'Leadership') {
            navigate('/leadership');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Convert display names to section IDs for scrolling (e.g., "About Us" -> "about")
        const sectionId = link.toLowerCase().replace(' us', '').trim();

        // If we are not on the home page, navigate to home first then scroll
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar expand="lg" variant="dark" fixed="top" className="py-2 shadow-sm" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgb(255, 255, 255, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <Container fluid className="px-4">
                <div className="d-flex align-items-center w-100 px-2">
                    <button 
                        onClick={() => {
                            if (location.pathname !== '/') navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }} 
                        className="border-0 bg-transparent p-0" 
                    >
                        <img 
                            src={logo}
                            alt="Care Without Barriers"
                            style={{ height: '100px', width:'auto' }}
                        />
                    </button>
                
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-3 align-items-center">
                            {['About Us', 'Events', 'Leadership', 'Affiliates', 'Contact Us'].map((link, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleNavClick(link)}
                                    className="font-inter text-decoration-none border-0 bg-transparent opacity-75 fw-bold"
                                    style={{ color: '#000000', fontFamily: "'Inter', sans-serif" }}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'}
                                >
                                    {link}
                                </button>
                            ))}

                            {/* Donate Button */}
                            <Button 
                                href="https://www.gofundme.com/f/free-health-screenings-for-cleveland-communities?attribution_id=sl:2f813fb0-b26f-447b-8aab-b6ff5e4b4482&lang=en_US&ts=1767154041&utm_campaign=fp_sharesheet&utm_content=amp17_control&utm_medium=customer&utm_source=copy_link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-inter fw-bold border-0 d-flex align-items-center justify-content-center shadow-sm px-4 py-2 text-decoration-none"
                                style={{ 
                                    backgroundColor: 'var(--accent)', 
                                    color: '#ffffff', 
                                    fontFamily: "'Inter', sans-serif",
                                    borderRadius: '50px',
                                    transition: 'transform 0.2s ease-in-out'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Donate
                            </Button>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                </div>
            </Container>
        </Navbar>
    );
}
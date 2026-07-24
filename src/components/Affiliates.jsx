import { Container, Row, Col } from 'react-bootstrap';
import IBN from '../assets/ibn-sina-clinic.png';
import WCMA from '../assets/wcma.png';

export default function Affiliates() {
    const partners = [
        { name: "Ibn Sina Clinic", logo: IBN },
        { name: "WCMA", logo: WCMA }
    ];

    return (
        <div id="affiliates" className="py-5 bg-white text-black border-top">
            <Container className="py-4">
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="fw-bold display-4 mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent)" }}>
                            Our Affiliates
                        </h1>
                        <p className="text-secondary fs-5">
                            We proudly collaborate with leading healthcare institutions and community organizations to ensure reliable care and accessible diagnostics.
                        </p>
                    </Col>
                </Row>
                
                <Row className="g-4 justify-content-center align-items-stretch">
                    {partners.map((partner, index) => (
                        <Col key={index} md={5} lg={4} className="d-flex">
                            {/* Added border-2 and borderColor: 'var(--accent)' */}
                            <div 
                                className="bg-light p-4 rounded-4 shadow-sm border border-2 text-center d-flex flex-column align-items-center justify-content-center w-100" 
                                style={{ minHeight: '220px', borderColor: 'var(--accent)' }}
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    className="mb-3 img-fluid" 
                                    style={{ maxHeight: '100px', objectFit: 'contain' }} 
                                />
                                <h5 className="fw-bold mb-0 text-secondary" style={{ fontSize: '1.1rem', color: 'var(--accent)' }}>
                                    {partner.name}
                                </h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
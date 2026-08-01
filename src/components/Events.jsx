import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';

export default function Events() {
    const [state, handleSubmit] = useForm("mwvgrbnq");

    return (
        <div id="events" className="py-5 bg-light text-black">
            <Container className="py-4">
                {/* Section Header */}
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="fw-bold display-4 mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent)" }}>
                            Events
                        </h1>
                        <p className="text-secondary mb-4">
                            Raised $1640+ for first screening on March 7th, 2026
                        </p>
                    </Col>
                </Row>

                {/* Future Events Card */}
                <Row className="g-4 justify-content-center">
                    <Col md={6} lg={8}>
                        <div className="bg-white p-5 rounded-4 shadow-sm border d-flex flex-column flex-md-row justify-content-between align-items-md-center w-100 position-relative overflow-hidden">
                        
                        {/* Content Side */}
                        <div className="mb-4 mb-md-0 pe-md-4">
                            <span 
                            className="badge px-3 py-2 rounded-pill fw-bold text-uppercase"
                            style={{ backgroundColor: 'var(--accent)', color: '#ffffff', fontSize: '0.75rem' }}
                            >
                            Future Events
                            </span>
                            <h3 className="fw-bold mt-3 mb-2" style={{ color: '#000000', fontSize: '1.5rem' }}>
                            General Interest Sign Up
                            </h3>
                            <p className="text-secondary mb-0">
                            Want to stay informed about our next community health screening and events?
                            </p>
                        </div>

                        {/* Button Side */}
                        <div className="flex-shrink-0">
                            <Button 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeMnnSH2nwLTSBPOrWm_X9VwZ5mFJ5-5xzJqhYHSRFJCK7ZIA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 fw-bold border-0 shadow-sm text-light"
                                style={{ backgroundColor: 'var(--accent)' }}
                            >
                                Sign Up For Future Events
                            </Button>
                        </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
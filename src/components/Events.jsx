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

                {/* Two-Column Layout */}
                <Row className="g-4 align-items-stretch">
                    <Col md={6} className="d-flex">
                        <div className="bg-white p-5 rounded-4 shadow-sm border d-flex flex-column justify-content-between w-100">
                            <div>
                                <h3 className="fw-bold mb-3" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>
                                    Get Event Updates
                                </h3>
                                <p className="text-secondary mb-4">
                                    Sign up with your email to receive direct notifications about our upcoming free blood-testing clinics, volunteer opportunities, and community health fairs.
                                </p>
                            </div>

                            {state.succeeded ? (
                                <div className="bg-white p-5 rounded-4 shadow-sm border mx-auto" style={{ maxWidth: '600px' }}>
                                    <h3 className="fw-bold mb-3" style={{ color: 'var(--accent)' }}>You're Subscribed!</h3>
                                    <p className="text-secondary mb-0">Thank you for joining our mailing list. We'll keep you updated on upcoming free blood-testing clinics.</p>
                                </div>
                            ) : (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Control 
                                            type="email" 
                                            name="email"
                                            placeholder="Enter your email address" 
                                            required
                                            className="py-3 rounded-3"
                                        />
                                    </Form.Group>
                                    <Button 
                                        type="submit" 
                                        disabled={state.submitting}
                                        className="w-100 py-3 fw-bold border-0 shadow-sm"
                                        style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
                                    >
                                        {state.submitting ? 'Subscribing...' : 'Subscribe'}
                                    </Button>
                                </Form>
                            )}
                        </div>
                    </Col>

                    {/* RIGHT COLUMN: Future Events Sign-Up Card */}
                    <Col md={6} className="d-flex">
                        <div className="bg-white p-5 rounded-4 shadow-sm border d-flex flex-column justify-content-between w-100 position-relative overflow-hidden">
                            {/* Optional "Upcoming" badge */}
                            <div className="mb-3">
                                <span 
                                    className="badge px-3 py-2 rounded-pill fw-bold text-uppercase"
                                    style={{ backgroundColor: 'var(--accent)', color: '#ffffff', fontSize: '0.75rem' }}
                                >
                                    Future Events
                                </span>
                                <h3 className="fw-bold mt-3 mb-2" style={{ color: '#000000', fontSize: '1.5rem' }}>
                                    General Interest Sign Up
                                </h3>
                            </div>

                            <div className="text-secondary mb-4">
                                <p className="mb-3">
                                    Want to stay informed about our next community health screening and events?
                                </p>
                            </div>

                            <div>
                                <Button 
                                    href="#contact" // Or link to a sign-up modal / external form
                                    className="w-100 py-3 fw-bold border-0 shadow-sm text-light"
                                    style={{ border: '1px solid #dee2e6', backgroundColor: 'var(--accent)'}}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Handle event registration action
                                        alert("General sign-up clicked");
                                        // TODO: ADD ESA's Google form
                                    }}
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
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xbdneear");

    return (
        <div id="contact" className="py-5 bg-light text-black">
            <Container className="py-4">
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="fw-bold display-4 mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent)" }}>
                            Contact Us
                        </h1>
                        <p className="text-secondary fs-5">
                            You can reach us at 404-503-2236 or carewithoutbarriers@gmail.com
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 align-items-stretch">
                    {/* LEFT COLUMN: Google Map */}
                    <Col md={6} className="d-flex">
                        <div className="bg-white p-3 rounded-4 shadow-sm border w-100 d-flex flex-column">
                            <div className="mb-3 px-2 pt-2">
                                <h4 className="fw-bold mb-1" style={{ color: 'var(--accent)' }}>Our Location</h4>
                                <p className="text-secondary small mb-0">6055 W. 130th St., Parma, OH 44130</p>
                            </div>
                            <div className="flex-grow-1 rounded-3 overflow-hidden shadow-sm" style={{ minHeight: '300px' }}>
                                <iframe 
                                    title="Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.518607142436!2d-81.76435!3d41.4032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830edd1925b42d5%3A0x6b306b6a22f3e8b!2s6055%20W%20130th%20St%2C%20Parma%2C%20OH%2044130!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </Col>

                    {/* RIGHT COLUMN: Contact Form (Name, Email, Message) */}
                    <Col md={6} className="d-flex">
                        <div className="bg-white p-5 rounded-4 shadow-sm border w-100 d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="fw-bold mb-3" style={{ color: 'var(--accent)' }}>Send Us a Message</h4>
                                <p className="text-secondary mb-4">
                                    Fill out the form below and a member of our team will get back to you shortly.
                                </p>
                            </div>

                            {state.succeeded ? (
                                <div className="alert alert-success border-0 rounded-3 text-center py-4">
                                    <strong>Thank you!</strong> Your message has been sent successfully.
                                </div>
                            ) : (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="contactName">
                                        <Form.Label className="text-secondary small fw-bold">Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="name"
                                            placeholder="Enter your name" 
                                            required
                                            className="py-2 rounded-3"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="contactEmail">
                                        <Form.Label className="text-secondary small fw-bold">Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="email"
                                            placeholder="Enter your email" 
                                            required
                                            className="py-2 rounded-3"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="contactMessage">
                                        <Form.Label className="text-secondary small fw-bold">Message</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={4}
                                            name="message"
                                            placeholder="Type your message here..." 
                                            required
                                            className="rounded-3"
                                        />
                                    </Form.Group>

                                    <Button 
                                        type="submit" 
                                        className="w-100 py-3 fw-bold border-0 shadow-sm"
                                        style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
                                    >
                                        {state.submitting ? 'Sending' : 'Send Message'}
                                    </Button>
                                </Form>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
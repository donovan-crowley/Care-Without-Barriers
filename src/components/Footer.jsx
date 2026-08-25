import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="py-5 text-black" style={{ backgroundColor: "var(--accent)" }}>
            <Container>
                <Row className="align-items-center mb-4">
                    {/* Left Side: Mailing Address */}
                    <Col md={6} className="text-center text-light text-md-start mb-4 mb-md-0 border-end-md">
                        <h4 className="fw-bold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Mailing Address
                        </h4>
                        <p className="font-monospace mb-0">
                            6055 W. 130th St., Parma, OH 44130
                        </p>
                    </Col>

                    {/* Right Side: Contact Us */}
                    <Col md={6} className="text-center text-light text-md-end">
                        <h4 className="fw-bold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Contact Us
                        </h4>
                        <p className="font-monospace mb-1">
                            Phone: 440-503-2236
                        </p>
                        <p className="font-monospace mb-0">
                            Email: carewithoutbarriers@gmail.com
                        </p>
                    </Col>
                </Row>

                <hr className="border-white opacity-25 my-4" />

                {/* Copyright */}
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <p className="font-monospace text-light b-0" style={{ fontSize: '0.75rem' }}>
                            Copyright © Care Without Barriers {new Date().getFullYear()}.
                        </p>
                        <p className="font-monospace text-light b-0" style={{ fontSize: '0.75rem' }}>
                            Website developed by Donovan Crowley.
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <div id="about" className="min-vh-100 bg-light text-black d-flex align-items-center py-5">
            <Container className="py-5">
                <Row className="justify-content-center mb-5">
                    <Col lg={10} className="text-center">
                        <h1 className="fw-bold display-4 mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--accent)" }}>
                            Who We Are
                        </h1>
                        <p className="text-muted fs-6 pb-3">
                            Established in Jan. 2026
                        </p>
                        <p className="lead text-muted fs-4">
                            Care Without Barriers is a health initiative providing free complete blood count tests, lipid panels, and comprehensive metabolic panel screenings to uninsured and underserved individuals.
                        </p>
                    </Col>
                </Row>
                
                <Row className="g-4 justify-content-center pt-4">
                    <Col md={4}>
                        <div className="p-4 h-100 shadow-sm rounded-4 bg-white border text-center">
                            <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--accent)' }}>Our Mission</h3>
                            <p className="mb-0 text-secondary">
                                We aim to address the critical barriers preventing low-income families and immigrants from accessing routine healthcare and early diagnostics.
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-4 h-100 shadow-sm rounded-4 bg-white border text-center">
                            <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--accent)' }}>Why It Matters</h3>
                            <p className="mb-0 text-secondary">
                                Without health insurance, basic blood testing can be prohibitively expensive, leading individuals to delay crucial care until conditions become serious.
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-4 h-100 shadow-sm rounded-4 bg-white border text-center">
                            <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--accent)' }}>Our Partnership</h3>
                            <p className="mb-0 text-secondary">
                                We provide free essential blood tests and connect participants with the Ibn Sina Free Clinic, where physicians review results and provide appropriate follow-up care.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
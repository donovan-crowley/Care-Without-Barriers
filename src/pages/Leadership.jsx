import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Leadership() {
    const leaders = [
        {
            name: "Yara Ibrahim",
            role: "Co-Founder",
        },
        {
            name: "Adam Esa",
            role: "Co-Founder",
        },
        {
            name: "Hamza Said",
            role: "Co-Founder",
        },
        {
            name: "Donovan Crowley",
            role: "Website & Tech",
        }
    ];

    return (
        <div id="leadership" className="py-5 bg-light text-black d-flex min-vh-100 flex-column justify-content-center" style={{ paddingTop: '120px' }}>
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="fw-bold display-4 mb-3" style={{ color: 'var(--accent)', fontFamily: "'Inter', sans-serif" }}>
                            Our Team
                        </h1>
                    </Col>
                </Row>

                <Row className="g-4 justify-content-center align-items-stretch">
                    {leaders.map((leader, index) => (
                        <Col key={index} md={6} lg={3} className="d-flex">
                            <Card className="bg-white border-2 rounded-4 shadow-sm text-center d-flex flex-column w-100" style={{ borderColor: 'var(--accent)' }}>
                                <Card.Body className="d-flex flex-column justify-content-between p-4">
                                    <div>
                                        <Card.Title className="fw-bold mb-1" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>
                                            {leader.name}
                                        </Card.Title>
                                        <p className="text-muted small fw-bold mb-3">
                                            {leader.role}
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
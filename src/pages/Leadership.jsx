import { Container, Row, Col, Card } from 'react-bootstrap';
import esaImg from '../assets/EsaHeadshot.png';
import hamzaImg from '../assets/HamzaHeadshot.png';

export default function Leadership() {
    const leaders = [
        {
            name: "Yara Ibrahim",
            role: "Co-Founder",
            image: "https://via.placeholder.com/150",
            hasPhoto: false,
        },
        {
            name: "Adam Esa",
            role: "Co-Founder",
            image: esaImg,
            hasPhoto: true,
        },
        {
            name: "Hamza Said",
            role: "Co-Founder",
            image: hamzaImg,
            hasPhoto: true,
        },
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
                        <Col key={index} md={6} lg={4} className="d-flex">
                            <Card className="bg-white border-2 rounded-4 shadow-sm text-center d-flex flex-column w-100" style={{ borderColor: 'var(--accent)' }}>
                                <div className="p-4 pb-0 d-flex justify-content-center">
                                    <div
                                        className="rounded-circle overflow-hidden shadow-sm d-flex align-items-center justify-content-center bg-light"
                                        style={{ width: '130px', height: '130px', border: '3px solid var(--accent)' }}
                                    >
                                        {leader.hasPhoto ?(
                                            <Card.Img
                                                variant="top"
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                        ) : (
                                            /* Generic User Silhouette SVG */
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90"
                                                height="90"
                                                fill="var(--accent)"
                                                className="bi bi-person-fill"
                                                style={{ transform: 'translateY(8px)' }}
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <Card.Body className="d-flex flex-column justify-content-between p-4">
                                    <div>
                                        <Card.Title className="fw-bold mb-1" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>
                                            {leader.name}
                                        </Card.Title>
                                        <p className="text-muted small fw-bold mb-0">
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
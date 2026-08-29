import { Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
    return (
        <>
            <div
                className="w-100 py-3 text-white text-center"
                style={{
                    backgroundColor: '#0d6efd', // Solid Bootstrap primary color
                    fontFamily: "'Inter', sans-serif",
                    marginTop: '115px'
                }}
            >
                <Container>
                    <h2 className="fw-bold mb-0" style={{ fontSize: '1.75rem', color: 'white'}}>
                        Welcome to Care Without Barriers!
                    </h2>
                </Container>
            </div>

            <div 
                className="d-flex align-items-stretch position-relative text-white"
                style={{
                    backgroundImage: `url('./CWBbackground.png')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '77vh',
                    width: '100%'
                }}
            >
                {/* Dark overlay for contrast */}
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100" 
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                ></div>

                {/* Container forces the box to stretch from top (just below navbar) to bottom */}
                {/*<Container className="position-relative z-index-1 d-flex align-items-center py-5 mt-4">
                    <Row className="w-100">
                        <Col md={8} lg={6}>
                            <div 
                                className="p-5 shadow-lg rounded-end-4"
                                style={{ 
                                    /* Use rgba with your accent color or solid hex with alpha 
                                    so the text won't inherit the transparency  
                                    backgroundColor: 'rgba(13, 110, 253, 0.7)', 
                                    backdropFilter: 'blur(10px)',
                                    color: '#ffffff',
                                    fontFamily: "'Inter', sans-serif",
                                    minHeight: '20vh', // Extends the shape vertically
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h1 className="fw-bold mb-3 text-light" style={{ fontSize: '2.5rem' }}>
                                    Welcome to Care Without Barriers!
                                </h1>
                                <p className="fs-5 mb-0">
                                    Providing free screenings and care to uninsured and underserved individuals.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container> */}
            </div>
        </>
    );
}
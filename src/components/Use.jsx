import { Container, Row, Col } from 'react-bootstrap';

export default function Use() {
    return (
        <div id="screenings" className="py-5 text-black" style={{ backgroundColor: 'rgb(211, 211, 211)' }}>
            <Container className="py-4">
                <Row className="justify-content-center text-center mb-4">
                    <Col lg={8}>
                        <h2 className="fw-bold mb-3" style={{ color: 'black', fontFamily: "'Inter', sans-serif" }}>
                            Our Comprehensive Health Screenings
                        </h2>
                        <p className="text-secondary fs-5 text-black">
                            We provide crucial diagnostic panels designed to screen for early health risks, evaluate organ functionality, and guide informed medical care.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4 justify-content-center pt-4">
                    {/* CBC Blood Tests */}
                    <Col md={4} className="d-flex">
                        <div className="position-relative pt-5 w-100">
                            <div 
                                className="position-absolute top-0 start-50 translate-middle-x rounded-circle border border-4 border-white shadow-sm overflow-hidden bg-white" 
                                style={{ width: '120px', height: '120px', zIndex: 2, borderColor: 'var(--accent) !important' }}
                            >
                                <img src="/CBC.png" alt="CBC Blood Tests" className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="bg-white p-4 pt-5 rounded-4 shadow-sm border text-center d-flex flex-column h-100" style={{ marginTop: '50px' }}>
                                <h4 className="fw-bold mb-3 pt-3" style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>
                                    CBC BLOOD TESTS
                                </h4>
                                <ul className="list-unstyled text-secondary text-start ps-3 mb-0">
                                    <li className="mb-2">• Anemia</li>
                                    <li className="mb-2">• Infection</li>
                                    <li className="mb-2">• Inflammation</li>
                                    <li>• Bleeding Disorders</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    {/* Lipid Panel */}
                    <Col md={4} className="d-flex">
                        <div className="position-relative pt-5 w-100">
                            <div 
                                className="position-absolute top-0 start-50 translate-middle-x rounded-circle border border-4 border-white shadow-sm overflow-hidden bg-white" 
                                style={{ width: '120px', height: '120px', zIndex: 2, borderColor: 'var(--accent) !important' }}
                            >
                                <img src="/Lipid.png" alt="Lipid Panel" className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="bg-white p-4 pt-5 rounded-4 shadow-sm border text-center d-flex flex-column h-100" style={{ marginTop: '50px' }}>
                                <h4 className="fw-bold mb-3 pt-3" style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>
                                    LIPID PANEL
                                </h4>
                                <ul className="list-unstyled text-secondary text-start ps-3 mb-0">
                                    <li className="mb-2">• Cholesterol Levels</li>
                                    <li>• Heart Health Risk Screening</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    {/* CMP Metabolic Panel */}
                    <Col md={4} className="d-flex">
                        <div className="position-relative pt-5 w-100">
                            <div 
                                className="position-absolute top-0 start-50 translate-middle-x rounded-circle border border-4 border-white shadow-sm overflow-hidden bg-white" 
                                style={{ width: '120px', height: '120px', zIndex: 2, borderColor: 'var(--accent) !important' }}
                            >
                                <img src="/CMP.png" alt="CMP Metabolic Panel" className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="bg-white p-4 pt-5 rounded-4 shadow-sm border text-center d-flex flex-column h-100" style={{ marginTop: '50px' }}>
                                <h4 className="fw-bold mb-3 pt-3" style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>
                                    CMP METABOLIC PANEL
                                </h4>
                                <ul className="list-unstyled text-secondary text-start ps-3 mb-0">
                                    <li className="mb-2">• Kidney & Liver Function</li>
                                    <li className="mb-2">• Blood Sugar Levels</li>
                                    <li>• Electrolyte Balance</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
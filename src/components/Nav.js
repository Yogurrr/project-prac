import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <Container fluid="xxl">
                <Row className="title">
                    <Col className="col-2"><NavLink to='/'>Temfo,</NavLink></Col>
                    <Col className="col-4" style={{textAlign: "right"}}><NavLink to='/region'><i className="bi bi-geo-alt"></i>지역</NavLink></Col>
                    <Col className="col-3" style={{textAlign: "left"}}><NavLink to='/calendar'><i className="bi bi-calendar"></i>일정</NavLink></Col>
                    <Col className="col-3" style={{textAlign: "right"}}><NavLink to='/login'><i className="bi bi-person"></i></NavLink></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nav;
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => {
    return (
        <div>
            <Container fluid="xxl">
                <Row>
                    <Col xxl={{span: 2}}>
                        <NavLink to='/'>Temfo,</NavLink></Col>
                    <Col xxl={{span: 1, offset: 3}}>
                        <NavLink to='/region'>지역</NavLink></Col>
                    <Col><NavLink to='/calendar'>일정</NavLink></Col>
                    <Col xxl={{ span:1, offset: 4 }}>
                        <NavLink to='/login'>(아이콘)</NavLink></Col>
                </Row>
            </Container>
            <div className="navBorder"></div>
        </div>
    )
}

export default Nav;
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MainCommon.css';

const MainCommon = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="col-5 offset-1">환영합니다</Col>
                    <Col style={{textAlign: "right"}} className="col-5"><img src="/img/buddhist.png" /></Col>
                </Row>
                <Row><Col className="offset-1">이메일<br />masakisqq@naver.com</Col></Row>
            </Container>
        </div>
    )
}

export default MainCommon;
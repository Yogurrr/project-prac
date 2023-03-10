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
                    <Col xxl={{span: 2, offset: 1}}>환영합니다</Col>
                    <Col xxl={{span: 2, offset: 6}} className="buddhist"><img src="/img/buddhist.png" /></Col>
                </Row>
                <Row><Col xxl={{span: 2, offset: 1}}>이메일<br />masakisqq@naver.com</Col></Row>
            </Container>
        </div>
    )
}

export default MainCommon;
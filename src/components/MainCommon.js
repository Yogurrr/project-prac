import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MainCommon.css';

const MainCommon = () => {
    return (
        <div>
            <Container fluid="xxl">
                <Row>
                    <Col xxl={{span: 2, offset: 1}}>환영합니다</Col>
                    <Col xxl={{span: 2, offset: 6}}>(동자승 사진)</Col>
                </Row>
                <Row><Col xxl={{span: 2, offset: 1}}>이메일<br />masakisqq@naver.com</Col></Row>
                <Row className="dd">
                    <Col xxl={{span: 1, offset: 4}} className="likesmenu">좋아요</Col>
                    <Col xxl={{span: 1}} className="bar">|</Col>
                    <Col xxl={{span: 1}} className="infomenu"><NavLink to='/myinfo'>내정보</NavLink></Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainCommon;
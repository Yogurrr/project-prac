import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainCommon from "../components/MainCommon";
import './MyPage2.css'
import {NavLink} from "react-router-dom";
import {Card} from "react-bootstrap";

const MyPage2 = () => {
    return (
        <div>
            <MainCommon />
            <Container fluid="xxl">
                <Row className="lnm2">
                    <Col xxl={{span: 1, offset: 4}} className="likesmenu2"><NavLink to='/'>좋아요</NavLink></Col>
                    <Col xxl={{span: 1}} className="bar2">|</Col>
                    <Col xxl={{span: 1}} className="infomenu2">내정보</Col>
                </Row>
                <Row className="aa">
                    <Col xxl={{offset: 1}}>개인정보 유출에 조심하세요.</Col>
                </Row>
                <Row className="bb">
                    <Col xxl={{offset: 1, span: 10}}>카드링크</Col>
                </Row>
                <Row className="aa">
                    <Col xxl={{offset: 1}}>예약 정보</Col>
                </Row>
                <Row className="ddd">
                    <Col xxl={{offset: 1, span: 10}}>카드링크</Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyPage2;
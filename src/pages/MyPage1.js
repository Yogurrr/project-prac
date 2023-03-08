import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainCommon from "../components/MainCommon";
import './MyPage1.css'

const MyPage1 = () => {
    return (
        <div>
            <MainCommon />
            <Container fluid="xxl">
                <Row className="likes">
                    <Col xxl={{span: 3, offset: 1}}>좋아요를 누른 사찰</Col></Row>
                <Row className="plz">
                    <Col xxl={{span: 10, offset: 1}} className="likeslist">
                        <Col xxl={{span: 1}}>(이미지)</Col>
                        <Col xxl={{span: 1}}>XX사</Col>
                        <Col xxl={{span: 3}}>주소</Col>
                        <Col xxl={{span: 2}}>날짜</Col>
                        <Col xxl={{span: 3}}>프로그램 이름</Col>
                        <Col xxl={{span: 1}}>인원 수</Col>
                    </Col>
                </Row>
                <Row className="plz">
                    <Col xxl={{span: 10, offset: 1}} className="likeslist">
                        <Col xxl={{span: 1}}>(이미지)</Col>
                        <Col xxl={{span: 1}}>XX사</Col>
                        <Col xxl={{span: 3}}>주소</Col>
                        <Col xxl={{span: 2}}>날짜</Col>
                        <Col xxl={{span: 3}}>프로그램 이름</Col>
                        <Col xxl={{span: 1}}>인원 수</Col>
                    </Col>
                </Row>
                <Row className="plz">
                    <Col xxl={{span: 10, offset: 1}} className="likeslist">
                        <Col xxl={{span: 1}}>(이미지)</Col>
                        <Col xxl={{span: 1}}>XX사</Col>
                        <Col xxl={{span: 3}}>주소</Col>
                        <Col xxl={{span: 2}}>날짜</Col>
                        <Col xxl={{span: 3}}>프로그램 이름</Col>
                        <Col xxl={{span: 1}}>인원 수</Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyPage1;
import NavBar from "../components/NavBar.js";
import {Container, Row} from "react-bootstrap";
import ForumNewPost from "../components/forum-components/ForumNewPost";
import Footer from "../components/Footer";
import ShowQuestions from "../components/forum-components/ShowQuestions";

const divider = <div style={{paddingTop: '30px', backgroundColor:'#1b263b'}}/>

function Forum() {
    return (
        <div style={{backgroundColor:'#212529'}}>
            <NavBar/>
            {divider}
            <Container style={{minHeight:'80vh'}}>
                <Row>
                    <ForumNewPost/>
                    <ShowQuestions/>
                </Row>
            </Container>
            {divider}
            <Footer/>
        </div>
    )
}
export default Forum;
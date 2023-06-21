import NavBar from "../components/NavBar.js";
import {Container, Row} from "react-bootstrap";
import ForumNewPost from "../components/forum-components/ForumNewPost";
import Footer from "../components/Footer";
import ShowQuestions from "../components/forum-components/ShowQuestions";
import Question from "../components/new-forum/Question";
import Questions from "../components/new-forum/Questions";
import AskQuestion from "../components/new-forum/AskQuestion";

const divider = <div style={{paddingTop: '30px', backgroundColor:'#1b263b'}}/>

function Forum() {
    return (
        <div style={{backgroundColor:'#212529'}}>
            <NavBar/>
            {divider}
            <Container style={{minHeight:'80vh'}}>
¿                    {/*<ForumNewPost/>*/}
                    {/*<ShowQuestions/>*/}
                    <Questions/>
¿            </Container>
            {divider}
            <Footer/>
        </div>
    )
}
export default Forum;
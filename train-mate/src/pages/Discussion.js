import {Container} from "react-bootstrap";
import Footer from "../components/Footer";
import Answers from "../components/new-forum/Answers";
import {useLocation, useParams} from "react-router-dom";
import AddAnswer from "../components/new-forum/AddAnswer";
import NavBar from "../components/NavBar";

const divider = <div style={{paddingTop: '30px', backgroundColor:'#1b263b'}}/>

function Discussion() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const questionId = queryParams.get('questionId');

    return (
        <div style={{backgroundColor:'#212529'}}>
            <NavBar/>
            {divider}
            <Container style={{margin:'20px', minHeight:'80vh'}}>
                <Answers questionId={questionId}/>
            </Container>
            {divider}
            <Footer/>
        </div>
    )
}
export default Discussion;
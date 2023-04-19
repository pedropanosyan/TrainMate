import NavBar from "../components/NavBar.js";
import ForumHome from "./ForumHome";
import {Container, Row} from "react-bootstrap";
import ForumNewPost from "../components/forum_components/ForumNewPost";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Forum() {
    return (
        <div>
           <NavBar/>
            {divider}
            <Container>
                <Row>
                    <ForumNewPost/>
                </Row>
                <Row>
                    <ForumHome/>
                </Row>
            </Container>
        </div>
    )
}
export default Forum;
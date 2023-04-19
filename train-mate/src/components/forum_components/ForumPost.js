import {Modal} from "react-bootstrap";

function ForumPost() {
    return(
        <div
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog size="xl">
                <Modal.Header>
                    <Modal.Title>Post Title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
            </Modal.Dialog>
        </div>)
}
export default ForumPost;
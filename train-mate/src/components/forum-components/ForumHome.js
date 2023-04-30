import {Modal, Button} from "react-bootstrap";
import ForumPost from "./ForumPost";

const ForumHome = () => {
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog
                    size="xl"
                >
                    <Modal.Header>
                        <Modal.Title>Posts</Modal.Title>
                        <h5>X Total Posts</h5>

                    </Modal.Header>

                    <Modal.Body>
                        <ForumPost/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Previous</Button>
                        <Button variant="primary">Next</Button>
                    </Modal.Footer>
                </Modal.Dialog>

            </div>
        </>
    );
};

export default ForumHome;
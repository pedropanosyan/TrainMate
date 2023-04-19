import {Modal, Button} from "react-bootstrap";

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
                        <Modal.Title>Posts  </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Posts go here
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
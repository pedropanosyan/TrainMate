import {Modal, Container, Button} from "react-bootstrap";

const ForumHome = () => {
    return (
        <>
            <Container>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog
                    size="xl"
                >
                    <Modal.Header>
                        <Modal.Title>Post  </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Posts go here
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Cancel</Button>
                        <Button variant="primary">Publish</Button>
                    </Modal.Footer>
                </Modal.Dialog>

            </div>
            </Container>
            </>
    );
};

export default ForumHome;
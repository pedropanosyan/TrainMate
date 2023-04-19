import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ForumNewPost() {
    return(
        <div>
            <Modal.Dialog size="xl">
                <Modal.Header>
                    <Modal.Title>New Post  </Modal.Title>
                </Modal.Header>
            <Form className="form-inline">
                <Form.Group className="form-inline" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Post Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit"> Submit</Button>
            </Form>
            </Modal.Dialog>
        </div>
    )}
    export default ForumNewPost;

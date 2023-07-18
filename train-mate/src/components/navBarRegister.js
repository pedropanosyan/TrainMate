import {Container, Navbar} from "react-bootstrap";

function NavBarRegister() {


    return (
        <Navbar bg='dark' expand="xl" style={{ backgroundColor: '#212529' }}>
            <Container>
                <img
                    src="Imagenes/logo2.png"
                    alt="TrainMate logo"
                    width="60"
                    height="60"
                    className='d-inline block align top'
                    style={{marginRight: '10px', marginBottom: '7px'}}
                />

                <Navbar.Brand className='navBar-brand' href="/login">
                    <p style={{color:'whitesmoke', fontSize:'3em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></p>
                </Navbar.Brand>

            </Container>
        </Navbar>
    );
}

export default NavBarRegister;
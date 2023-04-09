import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import axios from "axios";


function NavBar() {

    const currentPath = window.location.pathname;

    const handleSignOut = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token);
        axios.post('http://localhost:8080/userSignOut', token)
            .then(function (response) {
                localStorage.clear();
                window.location.assign("/login");
            })
            .catch(function (error) {
            })
    }

    const toRoutine = () => {
        window.location.assign('/routines');
    }

    const toHome = () => {
        window.location.assign('/home');
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{backgroundColor:'#212529'}}>
                <Container>
                    <Navbar.Brand className='navBar-brand' href="#home">
                        <p style={{color: '#FFFFFF', fontSize: '2em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Image src="Imagenes/logo2.png" style={{width:"80px", height:"80px"}}/>
                        <Nav className="me-auto" style = {{color: 'white', fontSize: '1.4em', marginLeft: '200px', marginTop: '-25px'}}>
                            <Nav.Link className={`nav-link active`} style={{ marginRight: '70px', marginTop:'20px' }}>Progress</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} onClick={toHome} style={{ marginRight: '70px', marginTop:'20px' }}>Home</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/routines' ? 'active' : ''}`} onClick={toRoutine} style={{ marginRight: '70px', marginTop:'20px' }}>Routines</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/forum' ? 'active' : ''}`} style={{ marginRight: '70px', marginTop:'20px'}}>Forum</Nav.Link>
                            <Nav.Link onClick={handleSignOut} href="/login" style= {{marginRight: '70px', marginTop:'20px'}}>Sign Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar
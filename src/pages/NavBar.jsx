
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../image/PORT.png';



function NavHeader() {
    

    const signButtonStyle = { backgroundImage: 'linear-gradient(to right,#C381DB 0%,#4E92F9 100%)', border: "none", outline: "none", color: "white", padding: "2px 25px 2px 25px", borderRadius: "16px",alignText:"center" }


    return (
        <Navbar sticky="top" expand="lg" className='shadow-sm' style={{ backgroundColor:"transparent" }}>
            <Container >
                <Navbar.Brand as={Link} to="/"> <img src={logo} alt='brain & spine' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0 gap-2"
                        style={{ maxHeight: '100px', fontWeight: "600" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/" >Tools</Nav.Link>
                        <Nav.Link as={Link} to="/" >Services</Nav.Link>
                        <Nav.Link as={Link} to="/" >About us</Nav.Link>
                        <Nav.Link as={Link} to="/" >Contact us</Nav.Link>
                    </Nav>
                    <div >
                        <button style={signButtonStyle}>Sign In</button>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavHeader;
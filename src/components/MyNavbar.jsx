
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar= () => { 
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid>
      <img src='assets/logo.png' className='imgStyle'/>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Tv shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently added</Nav.Link>
            <Nav.Link href="#link">My list</Nav.Link>
    
           
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home"> <i className="bi bi-search icons "></i></Nav.Link>
            <Nav.Link href="#link">Kids</Nav.Link>
            <Nav.Link href="#link"> <i className="bi bi-bell icons"></i></Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-person-circle icons"></i></Nav.Link>
    
           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
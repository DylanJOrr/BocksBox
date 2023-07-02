import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/navbar.css";
import SearchBar from "./form/SearchBar";

function NavScrollExample() {
	return (
		<Navbar expand="lg" className="py-3">
			<Container fluid className="justify-content-start mx-3">
				<Navbar.Brand href="/" className="me-5">
					BocksBox
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll" className="me-5 flex-grow-0">
					<Nav className="my-2 my-lg-0" style={{ maxHeight: "120px" }} navbarScroll>
						<Nav.Link href="/Build" className="rounded-pill navButton">
							Build&nbsp;A&nbsp;Box
						</Nav.Link>
						<NavDropdown title="Discover" className="mx-2 rounded-pill navButton" id="navbarScrollingDropdown">
							{/* <NavDropdown.Divider /> */}
							<NavDropdown.Item href="/Build/#action1">Meal Kits</NavDropdown.Item>
							<NavDropdown.Item href="/Build/#action2">Ready Meals</NavDropdown.Item>
							<NavDropdown.Item href="/Build/#action3">Favourites</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/About" className="rounded-pill navButton">
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<SearchBar />
				<Form className="d-flex ms-5">
					<Nav.Link href="/register">
						<Button variant="outline-secondary me-2 rounded-pill">Register</Button>
					</Nav.Link>
					<Nav.Link href="/login">
						<Button variant="outline-primary rounded-pill">Login</Button>
					</Nav.Link>
				</Form>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;

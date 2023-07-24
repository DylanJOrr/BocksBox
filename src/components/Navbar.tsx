import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import ReactCountryFlag from "react-country-flag";
import "../styles/navbar.css";
import { Language } from "../share/types/types";
import Searchbar from "./form/SearchBar";
import { useState } from "react";
import i18n from "../i18n";

function NavScrollExample() {
	const [searchInput, setSearchInput] = useState("");

    const langs: Language[] = [
        { code: 'en', flagCode: 'GB', nativeName: 'English' },
        { code: 'fr', flagCode: 'FR', nativeName: 'Francais' },
    ];

    const [currLang, setCurrLang] = useState(i18n.language.toUpperCase());

    function changeLang(lang: string) {
        i18n.changeLanguage(lang);
        setCurrLang(i18n.language.toUpperCase());
        return;
    }

	return (
		<Navbar expand="lg" className="py-3 shadow-sm" >
			<Container fluid className="mx-3">
				<Navbar.Brand href="/" className="text-uppercase fw-medium text-align-center flex-grow-0">
                    <img src="src/img/foodbox.png" alt="BocksBox Logo" width="50"/>
					BocksBox
				</Navbar.Brand>

				<Navbar.Collapse className="">
					<Nav className="my-3">
                        <Nav.Link href="/Build" className="rounded-pill navButton text-nowrap text-center">Build A Box</Nav.Link>
                        <Container className="">
                            <NavDropdown title="Discover" className="rounded-pill mx-2 navButton text-center">
                                <NavDropdown.Item href="/Build/#action1">Meal Kits</NavDropdown.Item>
                                <NavDropdown.Item href="/Build/#action2">Ready Meals</NavDropdown.Item>
                                <NavDropdown.Item href="/Build/#action3">Favourites</NavDropdown.Item>
                            </NavDropdown>
                        </Container>
                        <Container>
                            <Nav.Link href="/About" className="rounded-pill navButton text-center">
                                About
                            </Nav.Link>
                        </Container>
                        <Form className="d-flex justify-content-center align-items-center d-lg-none">
                            <Nav.Link href="/register">
                                <Button variant="outline-secondary me-2 rounded-pill">Register</Button>
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <Button variant="outline-primary rounded-pill">Login</Button>
                            </Nav.Link>
                        </Form>
                        <div className="d-block d-sm-none mt-2">
                            <Searchbar context="Search" filter={setSearchInput} />
                        </div>
					</Nav>
				</Navbar.Collapse>

                <div className="d-none d-sm-block flex-grow-1">
                    <Searchbar context="Search" filter={setSearchInput} />
                </div>

                <NavDropdown title={currLang} className="rounded-pill mx-2 text-center">
                {langs.map((lang) => (
                    <NavDropdown.Item key={lang.code} className="d-flex flex-row align-items-center" onClick={() => changeLang(lang.code)} >
                        <ReactCountryFlag countryCode={lang.flagCode} svg title={lang.code.toUpperCase()} className="me-1" />
                        {lang.nativeName}
                    </NavDropdown.Item>    
                ))}
                </NavDropdown>

                <NavbarToggle className="ms-auto me-3" aria-controls="navbarScroll" />

                <Form className="d-none d-lg-flex flex-nowrap">
                    <Nav.Link href="/register">
                        <Button variant="outline-secondary me-2 rounded-pill text-nowrap">Sign Up</Button>
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

import { Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ICustomPropsSearchbar {
	context: string;
	filter: React.Dispatch<React.SetStateAction<string>>;
}

const handleSearch = (value: string, context: string, filter: React.Dispatch<React.SetStateAction<string>>) => {
	switch (context) {
		case "Search":
			filter(value);
			break;
		case "Filter":
			filter(value);
			break;
		default:
			console.log("Unknown Search Context");
			break;
	}
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const Searchbar = ({ context, filter }: ICustomPropsSearchbar) => {
	return (
		<Form className="d-flex mx-3 flex-grow-1" onSubmit={(e) => handleSubmit(e)}>
			<InputGroup className="">
				<Form.Control type="search" aria-label="Search" placeholder={context} onChange={(e) => handleSearch(e.target.value, context, filter)} />
				<Button variant="outline-secondary" id="button-addon1">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Button>
			</InputGroup>
		</Form>
	);
};

export default Searchbar;

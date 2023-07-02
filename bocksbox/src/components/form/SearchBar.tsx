import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
	return (
		<Form className="d-flex mx-3 flex-grow-1">
			<Form.Control type="search" placeholder="Search" className="rounded-pill" aria-label="Search" />
			<InputGroup.Text className="input-group-text px-4 rounded-pill">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</InputGroup.Text>
		</Form>
	);
};

export default SearchBar;

import { Badge, Button, Form } from "react-bootstrap";
import CardGrid from "./CardGrid";
import { useContext, useState } from "react";
import Searchbar from "../../components/form/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Item } from "../../share/types/types";

const handleCartClick = (inv: Item[]) => {
	console.log(inv);
};

const Filter = () => {
	const [searchInput, setSearchInput] = useState<string>("");
	const [sortOrder, setSortOrder] = useState<string>("POP");
	const cart = useContext(ShoppingCartContext);
	return (
		<div className="discoverFilter vh-100 d-flex flex-row bg-body-tertiary">
			<section className="checkboxes d-flex flex-column m-3">
				<h3>Filter</h3>
				<Form>
					<Form.Label>Cat 1</Form.Label>
					<Form.Group>
						<Form.Check // prettier-ignore
							type="checkbox"
							id={`default-checkbox`}
							label={`default checkbox`}
						/>
						<Form.Check // prettier-ignore
							type="radio"
							id={`default-radio`}
							label={`default radio`}
						/>
					</Form.Group>
					<Form.Label>Cat 1</Form.Label>
					<Form.Group>
						<Form.Check // prettier-ignore
							type="checkbox"
							id={`default-checkbox`}
							label={`default checkbox`}
						/>
						<Form.Check // prettier-ignore
							type="radio"
							id={`default-radio`}
							label={`default radio`}
						/>
					</Form.Group>
					<Form.Label>Cat 1</Form.Label>
					<Form.Group>
						<Form.Check // prettier-ignore
							type="checkbox"
							id={`default-checkbox`}
							label={`default checkbox`}
						/>
						<Form.Check // prettier-ignore
							type="radio"
							id={`default-radio`}
							label={`default radio`}
						/>
					</Form.Group>
				</Form>
			</section>
			<div className="flex-d flex-column flex-grow-1 m-3">
				<span className="searchsort d-flex flex-row">
					<Searchbar context="Filter" filter={setSearchInput} />
					<Form className="me-3">
						<Form.Select placeholder="Sort By" onChange={(e) => setSortOrder(e.target.value)}>
							<option value="POP">Popularity</option>
							<option value="ASC">Ascending</option>
							<option value="DESC">Descending</option>
						</Form.Select>
					</Form>
					<Button className="me-3" variant="secondary">
						<FontAwesomeIcon icon={faCartShopping} onClick={() => handleCartClick(cart.inventory)} />
						<Badge bg="secondary">{useContext(ShoppingCartContext).inventory.length}</Badge>
					</Button>
				</span>
				<CardGrid filterText={searchInput} sortOrder={sortOrder} />
			</div>
		</div>
	);
};

export default Filter;

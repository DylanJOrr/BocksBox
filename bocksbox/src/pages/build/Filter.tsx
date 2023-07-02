import { Form } from "react-bootstrap";
import SearchBar from "../../components/form/SearchBar";
import CardGrid from "./CardGrid";

const DiscoverFilter = () => {
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
					<SearchBar />
					<Form>
						<Form.Select placeholder="Sort By">
							<option>Popularity</option>
							<option>Ascending</option>
							<option>Descending</option>
						</Form.Select>
					</Form>
				</span>
				<CardGrid />
			</div>
		</div>
	);
};

export default DiscoverFilter;

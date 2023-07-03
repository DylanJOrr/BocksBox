import { Button, Card, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
	const { subid, name } = useParams();
	const recommended = ["", "", "", "", ""];

	return (
		<div className="detailsPage">
			<div className="hero m-3">
				<h1>
					Details Page {subid} {name}
				</h1>
			</div>
			<div className="recommended m-3">
				<hr />
				<h2>Recommended</h2>
				<div className="recommendedCards d-inline-flex overflow-x-scroll">
					{recommended.map((item, i) => (
						<Card key={i} className="m-5" style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					))}
				</div>
				<hr />
			</div>
		</div>
	);
};

export default DetailsPage;

import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export type Items = {
	items: {
		id: number;
		name: string;
		desc: string;
		img: string;
		sections: {
			id: number;
			text: string;
		}[];
		links: {
			id: number;
			link: string;
			text: string;
		}[];
	}[];
};

const ProductCardL: React.FC<Items> = ({ items }) => {
	return (
		<div className="productCardL d-flex flex-row m-3">
			{items.map((item) => (
				<Card key={item.id} className="m-3" style={{ width: "18rem" }}>
					<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>{item.desc}</Card.Text>
					</Card.Body>
					{item.sections.map((section) => (
						<ListGroup className="list-group-flush">
							<ListGroup.Item key={section.id}>Cras justo odio {section.text}</ListGroup.Item>
						</ListGroup>
					))}
					{item.links.map((link) => (
						<Card.Body>
							<Card.Link key={link.id} href={link.link}>
								{link.text}
							</Card.Link>
						</Card.Body>
					))}
				</Card>
			))}
		</div>
	);
};

export default ProductCardL;

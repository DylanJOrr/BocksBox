import { Button, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NavigateFunction, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { SetStateAction, useContext, useState } from "react";
import { Cart, Item } from "../../share/types/types";

const handleClickCard = (cardID: number, cardName: string, nav: NavigateFunction) => {
	// nav("/Details/" + cardID + "/" + cardName);
};

const handleCartAdd = (id: number, cart: Cart, setErr: React.Dispatch<SetStateAction<null>>) => {
	const abortCtrl = new AbortController();

	fetch("http://localhost:8000/items/" + id, { signal: abortCtrl.signal })
		.then((res) => {
			if (!res.ok) throw Error("Could not fetch the data for that resource");
			else return res.json();
		})
		.then((data: Item) => {
			cart.addToCart(data);
			setErr(null);
		})
		.catch((err) => {
			if (err.name === "AbortError") console.log("Fetch Aborted");
			else setErr(err.message);
		});
};

interface ICustomPropsProductCardL {
	items: Item[];
}

const ProductCardL = ({ items }: ICustomPropsProductCardL) => {
	const [err, setErr] = useState(null);
	const cart = useContext(ShoppingCartContext);
	const navigate = useNavigate();
	return (
		<div className="productCardL d-flex flex-row m-3">
			{items.map((item) => (
				<Card key={item.id} className="m-3 shadow pe-auto" style={{ width: "18rem" }} onClick={() => handleClickCard(item.subid, item.name, navigate)}>
					<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
					<Card.Body className="position-relative">
						<CardGroup className="d-flex flex-row justify-content-between">
							<Card.Title>{item.name}</Card.Title>
							<Card.Text className="fw-lighter text-end">{"Rating: " + item.rating + "/5"}</Card.Text>
						</CardGroup>
						<Card.Text className="">{item.desc}</Card.Text>
						<CardGroup className="position-absolute z-1" style={{ bottom: "-20px", right: "-15px" }}>
							<Button
								className="d-flex justify-content-center align-items-center rounded-circle p-0 ms-auto"
								variant="success"
								style={{ border: "solid 1px var(--bs-border-color-translucent)" }}
								onClick={() => handleCartAdd(item.id, cart, setErr)}
							>
								<FontAwesomeIcon className="m-3" icon={faCartPlus} style={{ paddingTop: "2px" }} />
							</Button>
						</CardGroup>
					</Card.Body>
					<ListGroup className="list-group-flush z-0">
						{item.sections.map((section) => (
							<ListGroup.Item key={section.id}>{section.text}</ListGroup.Item>
						))}
					</ListGroup>
					<Card.Body>
						{item.links.map((link) => (
							<Card.Link key={link.id} href={link.link}>
								{link.text}
							</Card.Link>
						))}
					</Card.Body>
					<Link className="m-3 d-none d-lg-block" to={"/Details/" + item.subid + "/" + item.name}>
						<Button className="rounded-pill w-100" variant="primary" onClick={() => console.log(item.name)}>
							Details
						</Button>
					</Link>
				</Card>
			))}
		</div>
	);
};

export default ProductCardL;

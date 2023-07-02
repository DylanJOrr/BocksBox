import ProductCardL from "../../components/ui/ProductCard_L";
import { Spinner, Toast } from "react-bootstrap";
import useFetch from "../../utils/useFetch";

const CardGrid = () => {
	const { data: items, isLoading, err } = useFetch("http://localhost:8000/items");

	return (
		<div className="cardGrid h-100 m-3">
			{err && (
				<Toast bg="danger">
					<Toast.Body>Error: {err}</Toast.Body>
				</Toast>
			)}
			{isLoading && <Spinner />}
			{items && <ProductCardL items={items} />}
		</div>
	);
};

export default CardGrid;

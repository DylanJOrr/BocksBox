import ProductCardL from "../../components/ui/ProductCard_L";
import { Alert, Spinner } from "react-bootstrap";
import useFetch from "../../utils/useFetch";
import { Item } from "../../share/types/types";

interface ICustomPropsCardGrid {
	filterText: string;
	sortOrder: string;
}

const handleSort = (a: Item, b: Item, order: string) => {
	switch (order) {
		case "POP":
			if (a.rating < b.rating) return -1;
			if (a.rating > b.rating) return 1;
			return 0;
		case "ASC":
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		case "DESC":
			if (a.name < b.name) return 1;
			if (a.name > b.name) return -1;
			return 0;
	}
	return 0;
};

const CardGrid = ({ filterText, sortOrder }: ICustomPropsCardGrid) => {
	const { data: items, isLoading, err } = useFetch("http://localhost:8000/items");

	return (
		<div className="cardGrid h-100 m-3 bg-white rounded-4">
			{err && <Alert variant="danger">Error: {err} products.</Alert>}
			{isLoading && <Spinner />}
			{items && <ProductCardL items={items.filter((item: Item) => item.name.includes(filterText)).sort((a, b) => handleSort(a, b, sortOrder))} />}
		</div>
	);
};

export default CardGrid;

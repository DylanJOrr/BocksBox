import { createContext, useEffect, useState } from "react";
import { Cart, Item } from "../share/types/types";

export const ShoppingCartContext = createContext({} as Cart);

export function ShoppingCartProvider({ children }: any) {
	const [inventory, setInventory] = useState<Item[]>(JSON.parse(localStorage.getItem("cart") || "[]"));

	function addToCart(newItem: Item) {
		setInventory((prevState) => [...prevState, newItem]);
	}

	function removeFromCart(id: number) {
		setInventory((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	}

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(inventory));
	}, [inventory]);

	return <ShoppingCartContext.Provider value={{ inventory, addToCart, removeFromCart }}>{children}</ShoppingCartContext.Provider>;
}

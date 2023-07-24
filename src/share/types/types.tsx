export type Item = {
	id: number;
	subid: number;
	name: string;
	desc: string;
	img: string;
	rating: number;
	sections: { id: number; text: string }[];
	links: { id: number; link: string; text: string }[];
};

export type Cart = {
	inventory: Item[];
	addToCart: (newItem: Item) => void;
	removeFromCart: (id: number) => void;
};

export interface Language {
    code: string;
    flagCode: string;
    nativeName: string;
    englishName?: string;
}

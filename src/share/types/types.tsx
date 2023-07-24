export type Item = {
	id: number;
	name: string;
	desc_sm: string;
	desc_lg: string;
	img: string;
	rating: number;
    cookTime: string;
    facts: string;
    tags: string;
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

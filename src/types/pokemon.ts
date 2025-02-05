export type PokemonListResponse = {
	count: number;
	next?: string;
	previous?: null;
	results: {
		name: string;
		url: string;
	}[];
	error?: string;
};
type PokemonType = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};
export type PokemonDetailsResponse = {
	id: number;
	name: string;
	order: number;
	species: {
		name: string;
		url: string;
	};
	types: PokemonType[];
	error?: string;
};

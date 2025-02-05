import { PokemonListResponse, PokemonDetailsResponse } from '../types/pokemon';

const baseUrl = 'https://pokeapi.co/api/v2';

export async function fetchAllPokemon(): Promise<PokemonListResponse> {
	const errorResponse = {
		count: 0,
		results: [],
		error: '',
	};
	const response = await fetch(`${baseUrl}/pokemon`, {
		method: 'GET',
	});
	if (!response.ok) {
		return {
			...errorResponse,
			error: `Response status error: ${response.status} : ${JSON.stringify(
				response,
			)}`,
		};
	}
	const serializedResponse: PokemonListResponse = await response.json();
	return serializedResponse;
}

export async function getPokemonDetails(
	pokemonName: string,
): Promise<PokemonDetailsResponse> {
	const errorResponse = {
		id: 0,
		name: '',
		order: 0,
		species: {
			name: '',
			url: '',
		},
		types: [],
		error: '',
	};
	const response = await fetch(`${baseUrl}/pokemon/${pokemonName}`, {
		method: 'GET',
	});
	if (!response.ok) {
		return {
			...errorResponse,
			error: `Response status error: ${response.status} : ${JSON.stringify(
				response,
			)}`,
		};
	}
	const serializedResponse: PokemonDetailsResponse = await response.json();
	return serializedResponse;
}

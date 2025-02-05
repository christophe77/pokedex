import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../../api/pokemon';

export default function usePokemonList() {
	const [pokemonList, setPokemonList] =
		useState<{ name: string; url: string }[]>();
	const [error, setError] = useState<string>('');

	useEffect(() => {
		async function getAllPokemons() {
			const searchResponse = await fetchAllPokemon();
			setError(searchResponse.error ?? '');
			setPokemonList(searchResponse.results);
		}
		getAllPokemons();
	}, []);
	
	return { pokemonList, error };
}

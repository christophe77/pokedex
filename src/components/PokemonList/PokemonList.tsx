import usePokemonList from './usePokemonList';
import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

export default function PokemonList() {
	const { pokemonList } = usePokemonList();
	return (
		<div className={styles.container}>
			<div className={styles.cardList}>
				{pokemonList &&
					pokemonList.length > 0 &&
					pokemonList.map((pokemon) => (
						<div key={pokemon.name} className={styles.cardItem}>
							<PokemonCard key={pokemon.name} url={pokemon.url} name={pokemon.name} />
						</div>
					))}
			</div>
		</div>
	);
}

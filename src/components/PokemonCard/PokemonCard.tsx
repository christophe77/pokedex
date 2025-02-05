import styles from './PokemonCard.module.css';

interface IPokemonCardProps {
	url: string;
	name: string;
}
export default function PokemonCard({ url, name }: IPokemonCardProps) {
	return <div className={styles.card}>{name} <br /> {url}</div>;
}

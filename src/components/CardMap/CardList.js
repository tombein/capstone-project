import Cards from '../Cards/Cards';
import useStore from '../../hooks/useStore';

export default function CardList() {
	const cardlistzustand = useStore(state => state.cardlistzustand);
	return (
		<ul>
			{cardlistzustand.map(angebot => {
				return (
					<li key={angebot.id}>
						<Cards angebot={angebot} />
					</li>
				);
			})}
		</ul>
	);
}

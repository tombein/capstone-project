import Cards from '../Cards/Card';
import useStore from '../../hooks/useStore';

export default function CardList() {
	const cardlistzustand = useStore(state => state.cardlistzustand);
	return (
		<ul>
			{cardlistzustand.map(offer => {
				const index = cardlistzustand.findIndex(
					cardlistIndex => cardlistIndex.id === offer.id
				);
				return (
					<li key={offer.id}>
						<Cards angebot={offer} index={index} />
					</li>
				);
			})}
			;
		</ul>
	);
}

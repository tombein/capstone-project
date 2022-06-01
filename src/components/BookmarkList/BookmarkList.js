import useStore from '../../hooks/useStore';
import Card from '../Cards/Card';

export default function Bookmarklist() {
	const cardlistzustand = useStore(state => state.cardlistzustand);

	return (
		<section>
			<ul>
				{cardlistzustand.map(offer => {
					return (
						offer.reserved && (
							<li key={offer.id}>
								<Card />
							</li>
						)
					);
				})}
			</ul>
		</section>
	);
}

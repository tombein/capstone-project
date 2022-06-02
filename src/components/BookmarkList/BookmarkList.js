import useStore from '../../hooks/useStore';
import Card from '../Card/Card';

export default function BookmarkList() {
	const cardlistzustand = useStore(state => state.cardlistzustand);

	return (
		<section>
			<ul>
				{cardlistzustand.map(offer => {
					const index = cardlistzustand.findIndex(
						offerIndex => offerIndex.id === offer.id
					);
					return (
						offer.reserved && (
							<li key={offer.id}>
								Hallo
								<Card angebot={offer} index={index} />
							</li>
						)
					);
				})}
			</ul>
		</section>
	);
}

import useStore from '../../hooks/useStore';
import Card from '../Card/Card';
import StyledUl from '../styled-components/StyledUl';

export default function BookmarkList() {
	const cardlistzustand = useStore(state => state.cardlistzustand);

	return (
		<section>
			<StyledUl>
				{cardlistzustand.map(offer => {
					const index = cardlistzustand.findIndex(
						offerIndex => offerIndex.id === offer.id
					);
					return (
						offer.reserved && (
							<li key={offer.id}>
								<Card angebot={offer} index={index} />
							</li>
						)
					);
				})}
			</StyledUl>
		</section>
	);
}

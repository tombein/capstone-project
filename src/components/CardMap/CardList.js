import Card from '../Card/Card';
import useStore from '../../hooks/useStore';
import StyledUl from '../styled-components/StyledUl';

export default function CardList() {
	const cardlistzustand = useStore(state => state.cardlistzustand);
	return (
		<StyledUl>
			{cardlistzustand.map(offer => {
				const index = cardlistzustand.findIndex(
					cardlistIndex => cardlistIndex.id === offer.id
				);
				return (
					<li key={offer.id}>
						<Card angebot={offer} index={index} />
					</li>
				);
			})}
			;
		</StyledUl>
	);
}

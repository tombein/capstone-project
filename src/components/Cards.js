import data from './services/static-offer-card.json';
import Offercard from './styled-components/StyledOfferCard';
import HeadlineOffercard from './styled-components/styled-headline-offercard';

export default function CardDaten() {
	return (
		<Offercard>
			<HeadlineOffercard>{data[0].title}</HeadlineOffercard>
			<p>{data[0].adress}</p>
			<p>{data[0].datum}</p>
			<p>{data[0].zeitraum}</p>
			<p>{data[0].AnzahlFlaschen}</p>
			<p>{data[0].Notiz}</p>
		</Offercard>
	);
}

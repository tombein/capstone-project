import Offercard from '../styled-components/StyledOfferCard';
import HeadlineOffercard from '../styled-components/styled-headline-offercard';

export default function CardDaten({ data }) {
	return (
		<Offercard>
			<HeadlineOffercard>{data.title}</HeadlineOffercard>
			<p>{data.adress}</p>
			<p>{data.datum}</p>
			<p>{data.zeitraum}</p>
			<p>{data.AnzahlFlaschen}</p>
			<p>{data.Notiz}</p>
		</Offercard>
	);
}

import Offercard from '../styled-components/OfferCard.styled';
import HeadlineOffercard from '../styled-components/headline.styled';

export default function Cards({ data }) {
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

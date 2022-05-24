import Image from 'next/image';
import StyledDiv from '../styled-components/StyledDiv';
import HeadlineOffercard from '../styled-components/StyledHeadline';

export default function Cards({ angebot }) {
	console.log(angebot);
	return (
		<StyledDiv>
			<HeadlineOffercard>{angebot.title}</HeadlineOffercard>
			<p>{angebot.adress}</p>
			<p>datum: {angebot.datum}</p>
			<p>{angebot.zeitraum}</p>
			<p>{angebot.AnzahlFlaschen}</p>
			<p>{angebot.Notiz}</p>
			{angebot.foto && angebot.foto.url && (
				<Image src={angebot.foto.url} alt={angebot.title} width={100} height={100} />
			)}
		</StyledDiv>
	);
}

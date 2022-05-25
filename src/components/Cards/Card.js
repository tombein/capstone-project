import Image from 'next/image';
import StyledDiv from '../styled-components/StyledDiv';
import HeadlineOffercard from '../styled-components/StyledHeadline';

export default function Card({ angebot }) {
	return (
		<StyledDiv>
			<HeadlineOffercard>{angebot.title}</HeadlineOffercard>
			<p>{angebot.adress}</p>
			<p>datum: {angebot.date}</p>
			<p>{angebot.timeFrame}</p>
			<p>{angebot.amountBottles}</p>
			<p>{angebot.notes}</p>
			{angebot.photo && angebot.photo.url && (
				<Image src={angebot.photo.url} alt={angebot.title} width={100} height={100} />
			)}
		</StyledDiv>
	);
}

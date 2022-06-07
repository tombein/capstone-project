import StyledHeadline2 from '../styled-components/StyledHeadline2';
import useStore from '../../hooks/useStore';
import StyledCard from '../styled-components/StyledCard';
import StyledUnreservedButton from '../styled-components/StyledUnreservedButton';
import StyledReservedButton from '../styled-components/StyledReservedButton';
import StyledSection from '../styled-components/Styledsection';
import MySVG from '../SVG';
import StyledDiv from '../styled-components/Styleddiv';
import Styledparagraph from '../styled-components/Styledparagraph';
import Styledimage from '../styled-components/Styledimage';

export default function Card({ angebot, index }) {
	const onreserved = useStore(state => state.onreserved);
	const ondelete = useStore(state => state.ondelete);
	return (
		<StyledCard>
			<StyledHeadline2>{angebot.title}</StyledHeadline2>
			<div
				onClick={() => {
					ondelete(index);
				}}
			>
				<MySVG
					variant="delete"
					size="3rem"
					color="white"
					position="absolute"
					top="1rem"
					right="1rem"
				/>
			</div>
			<StyledSection variant="cardinfo">
				<article>
					<p>{angebot.adress}</p>
					<p>datum: {angebot.date}</p>
					<p>{angebot.timeFrame}</p>
					<p>{angebot.amountBottles}</p>
					<p>{angebot.notes}</p>
				</article>

				{angebot.photo && angebot.photo.url && (
					<Styledimage
						src={angebot.photo.url}
						alt={angebot.title}
						width={120}
						height={120}
					/>
				)}
			</StyledSection>
			{angebot.reserved && (
				<StyledDiv variant="reserved">
					<Styledparagraph>Reserviert</Styledparagraph>
				</StyledDiv>
			)}
			{angebot.reserved ? (
				<StyledUnreservedButton
					type="button"
					onClick={() => {
						onreserved(index);
					}}
				>
					Reservierung aufheben
				</StyledUnreservedButton>
			) : (
				<StyledReservedButton
					type="button"
					onClick={() => {
						onreserved(index);
					}}
				>
					Reservieren
				</StyledReservedButton>
			)}
		</StyledCard>
	);
}

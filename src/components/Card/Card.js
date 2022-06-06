import Image from 'next/image';
import StyledHeadline2 from '../styled-components/StyledHeadline2';
import useStore from '../../hooks/useStore';
import StyledCard from '../styled-components/StyledCard';
import StyledDeleteButton from '../styled-components/StyledDeleteButton';
import StyledUnreservedButton from '../styled-components/StyledUnreservedButton';
import StyledReservedButton from '../styled-components/StyledReservedButton';

export default function Card({ angebot, index }) {
	const onreserved = useStore(state => state.onreserved);
	const ondelete = useStore(state => state.ondelete);
	return (
		<StyledCard>
			<StyledHeadline2>{angebot.title}</StyledHeadline2>
			<p>{angebot.adress}</p>
			<p>datum: {angebot.date}</p>
			<p>{angebot.timeFrame}</p>
			<p>{angebot.amountBottles}</p>
			<p>{angebot.notes}</p>

			{angebot.reserved && <p>ist Reserviert</p>}

			{angebot.photo && angebot.photo.url && (
				<Image src={angebot.photo.url} alt={angebot.title} width={100} height={100} />
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
			<StyledDeleteButton
				type="button"
				onClick={() => {
					ondelete(index);
				}}
			>
				Löschen
			</StyledDeleteButton>
		</StyledCard>
	);
}

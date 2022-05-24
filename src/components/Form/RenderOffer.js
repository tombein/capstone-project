import RenderForm from '../UI/Form/RenderPost.styles';

export default function RenderOffer({ onAddPost }) {
	return (
		<>
			{onAddPost.map(posts => {
				return (
					<RenderForm key={posts.id}>
						<p>{posts.title}</p>
						<p>{posts.adress}</p>
						<p>{posts.datum}</p>
						<p>{posts.zeitraum}</p>
						<p>{posts.Anzahlflaschen}</p>
						<p>{posts.Notiz}</p>
						{/* 	<Contact>Kontakt</Contact> */}
					</RenderForm>
				);
			})}
		</>
	);
}

import CardDaten from '../Cards/Cards';

export default function CardMap({ postdata }) {
	return (
		<ul>
			{postdata.map(data => {
				return (
					<li key={data.id}>
						<CardDaten data={data} />
					</li>
				);
			})}
		</ul>
	);
}

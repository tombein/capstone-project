import Cards from '../Cards/Cards';

export default function CardList({ postdata }) {
	return (
		<ul>
			{postdata.map(data => {
				return (
					<li key={data.id}>
						<Cards data={data} />
					</li>
				);
			})}
		</ul>
	);
}

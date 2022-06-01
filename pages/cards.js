import dynamic from 'next/dynamic';
const CardList = dynamic(() => import('../src/components/CardMap/CardList'), { ssr: false });

export default function Cards() {
	return (
		<main>
			<CardList />
		</main>
	);
}

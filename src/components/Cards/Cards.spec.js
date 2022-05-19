import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDaten from './Cards';

describe('CardDaten', () => {
	it('renders six strings', () => {
		render(
			<CardDaten
				title="Angebot 1"
				adress="Blumenfeld 05"
				datum="13-10-2022"
				zeitraum="17:15-17:30"
				AnzahlFlaschen="18"
				Notiz="Flaschen stehen im Treppenhaus"
			/>
		);

		const title = screen.getByText(/Angebot 1/i);
		const adress = screen.getByText(/Blumenfeld 05/i);
		const datum = screen.getByText(/13-10-2022/i);
		const zeitraum = screen.getByText(/17:15-17:30/i);
		const AnzahlFlaschen = screen.getByText(/18/i);
		const Notiz = screen.getByText(/Flaschen stehen im Treppenhaus/i);

		expect(title).toBeInTheDocument();
		expect(adress).toBeInTheDocument();
		expect(datum).toBeInTheDocument();
		expect(zeitraum).toBeInTheDocument();
		expect(AnzahlFlaschen).toBeInTheDocument();
		expect(Notiz).toBeInTheDocument();
	});
});

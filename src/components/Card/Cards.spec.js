import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDaten from './Card';

describe('CardDaten', () => {
	it('renders six strings', () => {
		render(
			<CardDaten
				title="Angebot 1"
				adress="Blumenfeld 05"
				date="13-10-2022"
				timeFrame="17:15-17:30"
				amountBottles="18"
				notes="Flaschen stehen im Treppenhaus"
			/>
		);

		const title = screen.getByText(/Angebot 1/i);
		const adress = screen.getByText(/Blumenfeld 05/i);
		const date = screen.getByText(/13-10-2022/i);
		const timeFrame = screen.getByText(/17:15-17:30/i);
		const amountBottles = screen.getByText(/18/i);
		const notes = screen.getByText(/Flaschen stehen im Treppenhaus/i);

		expect(title).toBeInTheDocument();
		expect(adress).toBeInTheDocument();
		expect(date).toBeInTheDocument();
		expect(timeFrame).toBeInTheDocument();
		expect(amountBottles).toBeInTheDocument();
		expect(notes).toBeInTheDocument();
	});
});

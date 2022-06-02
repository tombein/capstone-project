import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		cardlistzustand: [
			{
				id: nanoid(),
				title: 'Angebot 1',
				adress: 'Blumenfeld 05',
				date: '13-10-2022',
				timeFrame: '17:15-17:30',
				amountBottles: '18',
				notes: 'Flaschen stehen im Treppenhaus',
				reserved: false,
				photo: {
					url: 'https://images.unsplash.com/photo-1653059959899-70ab4e464401?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
				},
			},
			{
				id: nanoid(),
				title: 'Angebot 2',
				adress: 'Blumenfeld 10',
				date: '20-05-2022',
				timeFrame: '14:00-14:15',
				amountBottles: '30',
				notes: 'Einfach klingeln.',
				reserved: false,
				photo: {
					url: 'https://images.unsplash.com/photo-1653059959899-70ab4e464401?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
				},
			},
		],

		ondelete: index => {
			set(
				produce(draft => {
					draft.cardlistzustand.splice(index, 1);
				})
			);
		},

		onreserved: index => {
			set(
				produce(draft => {
					draft.cardlistzustand[index].reserved = !draft.cardlistzustand[index].reserved;
				})
			);
		},

		addCard: (title, adress, date, timeFrame, amountBottles, notes, photo) => {
			set(
				produce(draft => {
					draft.cardlistzustand.push({
						title,
						adress,
						date,
						timeFrame,
						amountBottles,
						notes,
						photo,
						id: nanoid(),
						edit: false,
					});
				})
			);
		},
	}))
);
export default useStore;

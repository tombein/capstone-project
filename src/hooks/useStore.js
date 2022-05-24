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
				datum: '13-10-2022',
				zeitraum: '17:15-17:30',
				AnzahlFlaschen: '18',
				Notiz: 'Flaschen stehen im Treppenhaus',
				foto: {
					url: 'https://images.unsplash.com/photo-1653059959899-70ab4e464401?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
				},
			},
			{
				id: nanoid(),
				title: 'Angebot 2',
				adress: 'Blumenfeld 10',
				datum: '20-05-2022',
				zeitraum: '14:00-14:15',
				AnzahlFlaschen: '30',
				Notiz: 'Einfach klingeln.',
				foto: {
					url: 'https://images.unsplash.com/photo-1653059959899-70ab4e464401?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
				},
			},
		],
		addCard: (title, adress, datum, zeitraum, AnzahlFlaschen, Notiz, foto) => {
			set(
				produce(draft => {
					draft.cardlistzustand.push({
						title,
						adress,
						datum,
						zeitraum,
						AnzahlFlaschen,
						Notiz,
						foto,
						id: nanoid(),
						edit: false,
					});
				})
			);
		},

		/* 	addProject: (name, notes, begin, end) => {
			set(
				produce(draft => {
					draft.projectszustand.push({
						name,
						notes,
						begin,
						end,
						id: nanoid(),
						isChecked: false,
						edit: false,
					});
				})
			);
		},

		deleteFeature: index => {
			set(
				produce(draft => {
					draft.featureszustand.splice(index, 1);
				})
			);
		},
	
		openNote: index => {
			set(
				produce(draft => {
					draft.todoszustand[index].isOpen = !draft.todoszustand[index].isOpen;
				})
			);
		},
		checkFeature: index => {
			set(
				produce(draft => {
					draft.featureszustand[index].isChecked =
						!draft.featureszustand[index].isChecked;
				})
			);
		},
		checkTodo: index => {
			set(
				produce(draft => {
					draft.todoszustand[index].isChecked = !draft.todoszustand[index].isChecked;
				})
			);
		},
		*/
	}))
);
export default useStore;

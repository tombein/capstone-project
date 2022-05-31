import { useState } from 'react';
import StyledForm from '../styled-components/StyledForm';
import StyledInput from '../styled-components/StyledInput';
import useStore from '../../hooks/useStore';
import StyledButton from '../styled-components/StyledButton';
import { format } from 'date-fns';

export default function Form() {
	const [titleValue, setTitleValue] = useState('');
	const [adressValue, setAdressValue] = useState('');
	const [dateValue, setDateValue] = useState('');
	const [timeFrameValue, setTimeFrameValue] = useState('');
	const [amountBottlesValue, setAmountBottlesValue] = useState('');
	const [notesValue, setNotesValue] = useState('');
	const addCard = useStore(state => state.addCard);
	const [photoValue, setPhotoValue] = useState('');
	const [uploadedImage, setUploadedImage] = useState('');

	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET;

	const uploadImage = async event => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;

			const fileData = new FormData();
			fileData.append('file', event.target.files[0]);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});
			setPhotoValue(event.target.value);
			setUploadedImage(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};
	const today = new Date();
	const date = format(
		new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		'yyyy-MM-dd'
	);

	return (
		<section>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					addCard(
						titleValue,
						adressValue,
						dateValue,
						timeFrameValue,
						amountBottlesValue,
						notesValue,
						uploadedImage
					);
				}}
			>
				<div>
					<StyledInput
						required
						variant="inputfield"
						placeholder="Angebot Title"
						name="text-1542372332072"
						type="text"
						id="text-1542372332072"
						value={titleValue}
						onChange={event => {
							setTitleValue(event.target.value);
						}}
					/>
				</div>

				<div>
					<StyledInput
						required
						variant="inputfield"
						placeholder="Adresse"
						name="text-1542372332072"
						type="adress"
						id="text-1542372332072"
						value={adressValue}
						onChange={event => {
							setAdressValue(event.target.value);
						}}
					/>
				</div>

				<div>
					<StyledInput
						required
						variant="inputfield"
						placeholder="Datum"
						name="zeitraum"
						type="date"
						min={date}
						id="text-1542372332072"
						value={dateValue}
						onChange={event => {
							setDateValue(event.target.value);
						}}
					/>
				</div>

				<div>
					<StyledInput
						required
						variant="inputfield"
						placeholder="Zeitraum"
						name="Zeitraum"
						type="time"
						id="text-1542372332072"
						value={timeFrameValue}
						onChange={event => {
							setTimeFrameValue(event.target.value);
						}}
					/>
				</div>

				<div>
					<StyledInput
						required
						variant="inputfield"
						placeholder="Anzahl-FLaschen"
						name="mobile"
						type="number"
						min="0"
						id="Anzahl-Flaschen"
						value={amountBottlesValue}
						onChange={event => {
							setAmountBottlesValue(event.target.value);
						}}
					/>
				</div>

				<div>
					<StyledInput
						required
						variant="inputfield"
						placeholder="Notiz"
						name="notiz"
						type="text"
						id="notiz"
						value={notesValue}
						onChange={event => {
							setNotesValue(event.target.value);
						}}
					/>
				</div>

				<div>
					<StyledInput
						placeholder="Foto"
						name="foto"
						type="file"
						id="foto"
						value={photoValue}
						onChange={uploadImage}
					/>
				</div>
				<StyledButton type="submit">Inserieren</StyledButton>
			</StyledForm>
		</section>
	);
}

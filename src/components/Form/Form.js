import { useState } from 'react';
import StyledForm from '../styled-components/StyledForm';
import StyledInput from '../styled-components/StyledInput';
import useStore from '../../hooks/useStore';
import StyledButton from '../styled-components/StyledButton';
import { format } from 'date-fns';
import Wrapper from '../styled-components/StyledWrapper';
import StyledLabel from '../styled-components/StyledLabel';

export default function Form() {
	const [titleValue, setTitleValue] = useState('');
	const [adressValue, setAdressValue] = useState('');
	const [dateValue, setDateValue] = useState('');
	const [timeFrameValue, setTimeFrameValue] = useState('');
	const [amountBottlesValue, setAmountBottlesValue] = useState('');
	const [notesValue, setNotesValue] = useState('');
	const addCard = useStore(state => state.addCard);
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
		<Wrapper>
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
				<StyledLabel htmlFor="title">Angebot Title</StyledLabel>
				<div>
					<StyledInput
						required
						variant="inputfield"
						name="title"
						type="text"
						id="title"
						value={titleValue}
						onChange={event => {
							setTitleValue(event.target.value);
						}}
					/>
				</div>
				<StyledLabel htmlFor="title">Adresse</StyledLabel>
				<div>
					<StyledInput
						required
						variant="inputfield"
						name="text-1542372332072"
						type="adress"
						id="text-1542372332072"
						value={adressValue}
						onChange={event => {
							setAdressValue(event.target.value);
						}}
					/>
				</div>
				<StyledLabel htmlFor="title">Datum</StyledLabel>
				<div>
					<StyledInput
						required
						variant="inputfield"
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
				<StyledLabel htmlFor="title">Zeitraum</StyledLabel>
				<div>
					<StyledInput
						required
						variant="inputfield"
						name="Zeitraum"
						type="time"
						id="text-1542372332072"
						value={timeFrameValue}
						onChange={event => {
							setTimeFrameValue(event.target.value);
						}}
					/>
				</div>
				<StyledLabel htmlFor="title">Wieviele Flaschen möchten Sie spenden?</StyledLabel>
				<div>
					<StyledInput
						required
						variant="inputfield"
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
				<StyledLabel htmlFor="title">Notiz</StyledLabel>
				<div>
					<StyledInput
						required
						variant="inputfield"
						name="notiz"
						type="text"
						id="notiz"
						value={notesValue}
						onChange={event => {
							setNotesValue(event.target.value);
						}}
					/>
				</div>
				<StyledLabel htmlFor="title">Foto Upload</StyledLabel>
				<div>
					<StyledInput name="foto" type="file" id="foto" onChange={uploadImage} />
				</div>
				<StyledButton type="submit">Inserieren</StyledButton>
			</StyledForm>
		</Wrapper>
	);
}

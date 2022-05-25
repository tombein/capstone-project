import { useState } from 'react';
import StyledForm from '../styled-components/StyledForm';
import StyledInput from '../styled-components/StyledInput';
import StyledLabel from '../styled-components/StyledLabel';
import useStore from '../../hooks/useStore';
import StyledButton from '../styled-components/StyledButton';

export default function Form() {
	const [titleValue, setTitleValue] = useState('');
	const [adressValue, setAdressValue] = useState('');
	const [datumValue, setDatumValue] = useState('');
	const [zeitraumValue, setZeitraumValue] = useState('');
	const [anzahlflaschenValue, setAnzahlflaschenValue] = useState('');
	const [notizValue, setNotizValue] = useState('');
	const addCard = useStore(state => state.addCard);
	const [fotoValue, setFotoValue] = useState('');
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
			setFotoValue(event.target.value);
			setUploadedImage(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<section>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					addCard(
						titleValue,
						adressValue,
						datumValue,
						zeitraumValue,
						anzahlflaschenValue,
						notizValue,
						uploadedImage
					);
				}}
			>
				<StyledLabel htmlFor="Username">Angebot Title</StyledLabel>
				<StyledInput
					required
					name="Username"
					type="text"
					id="Username"
					value={titleValue}
					onChange={event => {
						setTitleValue(event.target.value);
					}}
				/>

				<StyledLabel htmlFor="post">Adresse</StyledLabel>
				<StyledInput
					required
					maxLength="700"
					name="adresse"
					type="adresse"
					id="post"
					value={adressValue}
					onChange={event => {
						setAdressValue(event.target.value);
					}}
				/>

				<StyledLabel htmlFor="Mail">Datum</StyledLabel>
				<StyledInput
					required
					name="zeitraum"
					type="date"
					id="Mail"
					value={datumValue}
					onChange={event => {
						setDatumValue(event.target.value);
					}}
				/>

				<StyledLabel htmlFor="Mobile">Zeitraum</StyledLabel>
				<StyledInput
					required
					name="Zeitraum"
					type="time"
					id="Mobile"
					value={zeitraumValue}
					onChange={event => {
						setZeitraumValue(event.target.value);
					}}
				/>
				<StyledLabel htmlFor="Anzahlflaschen">Anzahl-Flaschen</StyledLabel>
				<StyledInput
					required
					name="mobile"
					type="text"
					id="Anzahl-Flaschen"
					value={anzahlflaschenValue}
					onChange={event => {
						setAnzahlflaschenValue(event.target.value);
					}}
				/>

				<StyledLabel htmlFor="notiz">Notiz</StyledLabel>
				<StyledInput
					name="notiz"
					type="text"
					id="notiz"
					value={notizValue}
					onChange={event => {
						setNotizValue(event.target.value);
					}}
				/>

				<StyledLabel htmlFor="foto">Foto</StyledLabel>
				<StyledInput
					name="foto"
					type="file"
					id="foto"
					value={fotoValue}
					onChange={uploadImage}
				/>
				<StyledButton type="submit">Inserieren</StyledButton>
			</StyledForm>
		</section>
	);
}

export default function AddFormButton({ onSetFormButton }) {
	return (
		<button type="button" onClick={() => onSetFormButton(prevCheck => !prevCheck)}>
			Inserieren
		</button>
	);
}

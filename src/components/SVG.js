import React from 'react';
const SVGObject = {
	home: 'M12 3L2 12H5V20H10V14H14V15.11L19.43 9.68L12 3M21.04 11.14C20.9 11.14 20.76 11.2 20.65 11.3L19.65 12.3L21.7 14.35L22.7 13.35C22.91 13.14 22.91 12.79 22.7 12.58L21.42 11.3C21.32 11.2 21.18 11.14 21.04 11.14M19.06 12.88L13 18.94V21H15.06L21.11 14.93L19.06 12.88Z',
	posts: 'M15 13.77A3 3 0 0 0 15 18.23V20A2 2 0 0 1 13 22H11A2 2 0 0 1 9 20V18.23A3 3 0 0 0 9 13.77V9A12.28 12.28 0 0 0 10.91 4H10V2H14V4H13.09A12.28 12.28 0 0 0 15 9Z',
	insert: 'M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
	bookmark:
		'M15,5A2,2 0 0,1 17,7V23L10,20L3,23V7C3,5.89 3.9,5 5,5H15M9,1H19A2,2 0 0,1 21,3V19L19,18.13V3H7A2,2 0 0,1 9,1Z',
	map: 'M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 ,20 17.7 20 19Z',
};
function MySVG({ variant = 'home', size = '2.4rem', color = 'var(--icon-default' }) {
	return (
		<svg
			style={{
				width: size,
				height: size,
			}}
			viewBox="0 0 29 29"
		>
			<path d={SVGObject[variant]} fill={color} />
		</svg>
	);
}
export default MySVG;

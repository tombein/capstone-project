import React from 'react';
const SVGObject = {
	home: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
	posts: 'M15 13.77A3 3 0 0 0 15 18.23V20A2 2 0 0 1 13 22H11A2 2 0 0 1 9 20V18.23A3 3 0 0 0 9 13.77V9A12.28 12.28 0 0 0 10.91 4H10V2H14V4H13.09A12.28 12.28 0 0 0 15 9Z',
	insert: 'M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
	bookmark:
		'M15,5A2,2 0 0,1 17,7V23L10,20L3,23V7C3,5.89 3.9,5 5,5H15M9,1H19A2,2 0 0,1 21,3V19L19,18.13V3H7A2,2 0 0,1 9,1Z',
	map: 'M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z',
	delete: 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z',
};
function MySVG({
	variant = 'home',
	size = '2.5rem',
	color = 'var(--icon-default',
	position,
	top,
	right,
	left,
	bottom,
}) {
	return (
		<svg
			style={{
				width: size,
				height: size,
				position: position,
				top: top,
				right: right,
				left: left,
				bottom: bottom,
			}}
			viewBox="0 0 29 29"
		>
			<path d={SVGObject[variant]} fill={color} />
		</svg>
	);
}
export default MySVG;

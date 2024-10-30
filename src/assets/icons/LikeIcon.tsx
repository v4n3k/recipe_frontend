import { ILikeIcon } from '../../types/interfaces';

export const LikeIcon = ({ fill = 'none' }: ILikeIcon) => {
	return (
		<svg
			width='34'
			height='34'
			viewBox='0 0 34 34'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M29.5232 6.53073C28.7996 5.80682 27.9405 5.23257 26.9949 4.84077C26.0494 4.44897 25.0359 4.24731 24.0123 4.24731C22.9888 4.24731 21.9753 4.44897 21.0298 4.84077C20.0842 5.23257 19.2251 5.80682 18.5015 6.53073L16.9998 8.0324L15.4982 6.53073C14.0366 5.06917 12.0543 4.24807 9.98734 4.24807C7.92038 4.24807 5.93807 5.06917 4.47651 6.53073C3.01495 7.9923 2.19385 9.9746 2.19385 12.0416C2.19385 14.1085 3.01495 16.0908 4.47651 17.5524L16.9998 30.0757L29.5232 17.5524C30.2471 16.8288 30.8213 15.9697 31.2131 15.0242C31.6049 14.0786 31.8066 13.0651 31.8066 12.0416C31.8066 11.018 31.6049 10.0045 31.2131 9.05898C30.8213 8.11341 30.2471 7.2543 29.5232 6.53073Z'
				stroke='#1E1E1E'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
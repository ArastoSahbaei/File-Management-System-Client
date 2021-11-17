import styled from 'styled-components'

export interface ISpinner {
		width?: string;
		height?: string;
}

export const Spinner = (props: ISpinner) => {
	const { width, height } = props
	return (
		<Wrapper>
			<svg width={width || '64'} height={height || '64'} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0)">
					<path d="M19.825 31.7471C19.825 30.1823 20.0951 28.6536 20.6353 27.161C21.198 25.6443 22.0083 24.2721 23.0662 23.0443C24.1241 21.8165 25.4071 20.8415 26.9152 20.1193C28.4458 19.373 30.1678 18.9999 32.081 18.9999C34.3769 18.9999 36.3802 19.5175 38.0909 20.5527C39.8015 21.5638 41.0733 22.9119 41.9061 24.5971L36.8754 28.4249C36.5828 27.5823 36.1551 26.9323 35.5924 26.4749C35.0522 26.0175 34.4557 25.7045 33.803 25.536C33.1727 25.3434 32.5537 25.2471 31.946 25.2471C30.6855 25.2471 29.65 25.5841 28.8397 26.2582C28.0519 26.9323 27.4667 27.7869 27.084 28.8221C26.7014 29.8332 26.5101 30.8805 26.5101 31.9638C26.5101 33.1434 27.084 35.2488 27.084 35.2488L25.4039 39.4999L29.1232 37.9999C29.1232 37.9999 30.8656 38.7527 32.0135 38.7527C32.6212 38.7527 33.2402 38.6564 33.8705 38.4638C34.5007 38.2471 35.0747 37.9101 35.5924 37.4527C36.1101 36.9953 36.504 36.3814 36.7741 35.611L42.1425 39.0416C41.6698 40.2934 40.882 41.3647 39.779 42.2555C38.6761 43.1462 37.4269 43.8323 36.0313 44.3138C34.6358 44.7712 33.2515 44.9999 31.8785 44.9999C30.1003 44.9999 28.4683 44.6268 26.9827 43.8805C25.5197 43.1101 24.2479 42.099 23.1675 40.8471C22.1096 39.5712 21.288 38.1508 20.7028 36.586C20.1176 34.9971 19.825 33.3842 19.825 31.7471Z" fill="var(--spinner-clr)" />
					<path d="M29.825 30.9999H33.825" stroke="var(--spinner-clr)" strokeWidth="1.4" />
					<path d="M29.825 33.9999H33.825" stroke="var(--spinner-clr)" strokeWidth="1.4" />
				</g>
				<G3>
					<path fillRule="evenodd" clipRule="evenodd" d="M17.8579 46.142C11.2682 39.5524 10.2382 29.5084 14.7679 21.8388L16.972 24.043C13.5683 30.4662 14.5707 38.6122 19.9792 44.0207C25.3876 49.4292 33.5337 50.4316 39.9569 47.0279L42.161 49.232C34.4915 53.7617 24.4475 52.7317 17.8579 46.142ZM49.2321 42.161C53.7618 34.4914 52.7318 24.4474 46.1421 17.8578C39.5525 11.2681 29.5085 10.2381 21.8389 14.7678L24.0431 16.9719C30.4663 13.5682 38.6123 14.5706 44.0208 19.9791C49.4293 25.3876 50.4317 33.5336 47.028 39.9568L49.2321 42.161Z" fill="var(--spinner-clr)" />
				</G3>
				<G2>
					<path fillRule="evenodd" clipRule="evenodd" d="M13.6152 50.3846C4.67091 41.4403 3.60561 27.6006 10.4193 17.4902L12.5864 19.6573C6.9186 28.5536 7.96865 40.4954 15.7365 48.2633C23.5044 56.0312 35.4462 57.0812 44.3425 51.4135L46.5096 53.5805C36.3992 60.3942 22.5595 59.3289 13.6152 50.3846ZM53.5807 46.5095C60.3944 36.399 59.3291 22.5594 50.3848 13.6151C41.4405 4.67077 27.6008 3.60547 17.4904 10.4192L19.6574 12.5862C28.5538 6.91846 40.4956 7.96851 48.2634 15.7364C56.0313 23.5043 57.0814 35.4461 51.4136 44.3424L53.5807 46.5095Z" fill="var(--spinner-clr)" />
				</G2>
				<G1>
					<path fillRule="evenodd" clipRule="evenodd" d="M9.3726 54.6274C-1.92144 43.3333 -3.00842 25.6974 6.11166 13.1827L8.26204 15.333C0.297064 26.6488 1.37436 42.3865 11.4939 52.506C21.6135 62.6256 37.3512 63.7029 48.6669 55.7379L50.8173 57.8883C38.3025 67.0084 20.6666 65.9214 9.3726 54.6274ZM57.8884 50.8172C67.0085 38.3025 65.9215 20.6666 54.6274 9.37253C43.3334 -1.92152 25.6975 -3.0085 13.1827 6.11159L15.3331 8.26196C26.6488 0.296991 42.3865 1.37428 52.5061 11.4938C62.6257 21.6134 63.703 37.3511 55.738 48.6669L57.8884 50.8172Z" fill="var(--spinner-clr)" />
				</G1>
			</svg>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: inline-block;
	margin-top: 3px;
	position: relative;
	--spinner-clr: hsl(36, 100%, 48%, 100%);
	--spinner-scale: 1;
	--spinner-time: 10000ms;
	text-align: center;
	transform-box: fill-box;
	transform: scale(var(--spinner-scale));
`

const G3 = styled.g`
	transform-origin: 20px 20px;
	animation: var(--spinner-time) ease-in-out infinite spinn3;
	transform-box: fill-box;
	position: relative;
	@keyframes spinn3 {
		0%,
		5% {
			transform: rotate(0deg);
		}
	
		95%,
		100% {
			transform: rotate(1080deg);
		}
	}
`

const G2 = styled.g`
	transform-origin: 26px 26px;
	animation: var(--spinner-time) ease-in-out infinite spinn2;
	transform-box: fill-box;
	position: relative;
	@keyframes spinn2 {
		0%,
		3.5% {
			transform: rotate(0deg);
		}
	
		96.5%,
		100% {
			transform: rotate(-1260deg);
		}
	}
`

const G1 = styled.g`
	transform-origin: 32px 32px;
	animation: var(--spinner-time) ease-in-out infinite spinn1;
	@keyframes spinn1 {

		0%,
		2.5% {
			transform: rotate(0deg);
		}

		97.5%,
		100% {
			transform: rotate(1440deg);
		}
	}
`

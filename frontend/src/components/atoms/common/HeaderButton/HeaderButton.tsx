import React from 'react';
import './HeaderButton.scss';
import BackIcon from 'assets/icons/Back.svg';
import CloseIcon from 'assets/icons/Close.svg';
import useMovePage from 'hooks/useMovePage';

/**
 * 뒤로가기, 닫기 버튼이 있는 헤더 컴포넌트
 * @param icon string, 아이콘 url
 * @param text string, 버튼 옆에 있는 텍스트
 */
function HeaderButton({ type, text }: { type: string; text: string }) {
	const { goBack } = useMovePage();

	const icon = type === 'back' ? BackIcon : CloseIcon;
	const handleClick = () => {
		if (type === 'back') {
			goBack();
		} else {
			// Close Page
		}
	};

	return (
		<div className="header-button">
			<button type="button" onClick={handleClick}>
				<img src={icon} alt={text} height={14} width={14} />
			</button>
			<h1>{text}</h1>
		</div>
	);
}

export default HeaderButton;

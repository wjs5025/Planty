import HomePageLayout from 'components/layout/Page/HomePageLayout/HomePageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SubscribeSlider from 'components/organisms/subscribe/SubscribeSlider/SubscribeSlider';
import React from 'react';
import BannerSlider from 'components/organisms/common/BannerSlider/BannerSlider';
import SquareShortcutButton from 'components/atoms/common/SquareShortcutButton/SquareShortcutButton';
import RectShortcutButton from 'components/atoms/common/RectShortcutButton/RectShortcutButton';
import Header from 'components/organisms/common/Header/Header';
import useMovePage from 'hooks/useMovePage';

function HomePage() {
	const { movePage } = useMovePage();

	return (
		<HomePageLayout>
			<Header />
			<BannerSlider />
			<AreaTitle title="내 구독 정보" url="subscribe" />
			<SubscribeSlider />
			<AreaTitle title="서비스 바로가기" url="#" />
			<SquareShortcutButton
				text="예약관리"
				handleClick={() => {
					movePage('/mypage/booking');
				}}
				type="booking"
			/>
			<RectShortcutButton
				text="채팅 컨설팅"
				handleClick={() => {
					alert('채팅상담');
				}}
				type="consulting-chat"
			/>
			<RectShortcutButton
				text="화상 컨설팅"
				handleClick={() => {
					alert('화상상담');
				}}
				type="consulting-video"
			/>
			<AreaTitle title="구독샵" url="/shop" />
		</HomePageLayout>
	);
}

export default HomePage;

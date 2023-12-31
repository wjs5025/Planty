import React from 'react';
import './BookingListItem.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import 'moment/locale/ko';
import { IBooking } from 'types/domain/booking';
import convertTime from 'utils/common/convertTime';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';
import { deleteBooking } from 'utils/api/booking';
import { toast } from 'react-hot-toast';
import useMovePage from 'hooks/common/useMovePage';
import moment from 'moment';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';

function BookingListItem({ booking }: { booking: IBooking }) {
	const { movePage } = useMovePage();
	const today = moment(new Date()).format('YYYY-MM-DD');

	const onSubmit = () => {
		const message = `${booking.date}, ${convertTime(booking.time)}에 진행되는 '${
			booking.title
		}'의 예약을 정말 취소하시겠습니까?`;

		const onConfirm = async () => {
			try {
				const response = await deleteBooking(booking.cid);
				if (response.status === 200) {
					toast.success('예약을 취소했습니다 😥\n메인페이지로 이동합니다.');
					movePage('/', null);
				}
			} catch (error) {
				console.error(error);
			}
		};

		// confirm
		CustomAlert({
			title: '예약 취소',
			desc: message,
			btnTitle: '예약 취소하기',
			params: {},
			onAction: onConfirm,
		});
	};

	/**
	 * 컨설팅으로 연결
	 */
	const toConsulting = () => {
		try {
			toast.success('화상 컨설팅으로 이동합니다.');
			// 참여 화면으로 전달할 컨설팅 정보
			const consultingParticipateInfo = {
				cid: booking.cid,
				sid: booking.sid,
				title: booking.title,
				greenmate: booking.greenmate,
				date: booking.date,
				time: booking.time,
			};
			movePage('/consulting/participate', { consultingParticipateInfo });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Accordion className="booking-list-item-container">
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<div className="booking-header">
					<h3>{booking.title}</h3>
					<h4>
						{booking.date} / {convertTime(booking.time)}
					</h4>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="booking-info">
					<div id="detail">
						<div id="detail-header">
							<h3>예약 정보 상세</h3>
							{moment(booking.date).isAfter(today) ? (
								<button type="button" onClick={onSubmit}>
									예약 취소
								</button>
							) : (
								<div />
							)}
						</div>
						<div id="detail-content">
							<InfoRow title="가드너" content={booking.user} />
							<InfoRow title="그린메이트" content={booking.greenmate} />
						</div>
						<button type="button" onClick={toConsulting}>
							컨설팅 참여하기(TODO)
						</button>
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

export default BookingListItem;

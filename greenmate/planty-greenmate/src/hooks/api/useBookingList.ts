import { useEffect, useState } from 'react';
import { Value } from 'types/base/global';
import { IBooking } from 'types/subscribe';
import findBookingApi from 'utils/api/booking';

/**
 * 캘린더 상의 선택일자에 해당하는 예약(컨설팅) 목록을 불러와 리턴하는 커스텀 훅
 * @param date optional. Date 객체가 들어오면 해당 날짜에 해당하는 예약 목록만 출력.
 * @returns 컨설팅 내역 목록 배열
 */
const useBookingList = (date?: Value): IBooking[] => {
	const [bookings, setBookings] = useState<IBooking[]>([]);

	const fetchData = async (resDate: Value) => {
		try {
			const response = await findBookingApi(resDate);
			if (response?.data.subscribes) setBookings(response.data.subscribes);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(date as Value);
	}, [date]);

	return bookings;
};

export default useBookingList;

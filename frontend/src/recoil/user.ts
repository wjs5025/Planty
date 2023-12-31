import { atom } from 'recoil';
import { IUser } from 'types/domain/user';

const userState = atom<IUser | null>({
	key: 'userState',
	default: null,
	// default: {
	// 	nickname: 'nickname',
	// 	auth: '',
	// 	profilePhoto: '',
	// 	joinDate: new Date(),
	// 	ticketCount: 0,
	// 	address: '',
	// },
});

export default userState;

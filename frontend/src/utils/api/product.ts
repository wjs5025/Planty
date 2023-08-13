import { instance } from './instance';

export const findAllProductApi = async () => {
	const response = await instance.get('/subscribe-products');
	return response;
};

export const findProductBySpidApi = async (spid: number) => {
	const response = await instance.get(`/subscribe-products/${spid}`);
	return response;
};

export const findFilterProductApi = async (param: string) => {
	const response = await instance.get(`/subscribe-products?${param}`);
	return response;
};

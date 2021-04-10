import { makeAutoObservable } from 'mobx';
import { CourseContentsMockResponse } from '../__mock_data';

type SignupReqestParam = {
	email: string;
	password: string;
	username: string;
	tel: string;
};
type LoginReqestParam = {
	email: string;
	password: string;
	username?: string;
	tel?: string;
};

interface User {
	email: string;
	password: string;
	username: string;
	tel: string;
}

type TAuthStoreState = {
	user: User | null;
	accessToken: string;
};

const createAuthStore = () =>
	makeAutoObservable({
		user: null as User | null,
		accessToken: null as string | null,

		async signUp(body: SignupReqestParam) {
			const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/signup', {
				method: 'post',
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await res.json();
			return data;
		},

		async login(body: LoginReqestParam) {
			const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/login', {
				method: 'post',
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await res.json();

			this.user = data.user;
			this.accessToken = data.accessToken;

			localStorage.setItem('accessToken', data.accessToken);

			return data;
		},

		async me() {
			const token = localStorage.getItem('accessToken') || '';
			const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/me', {
				headers: { Authorization: token },
			});

			const data = await res.json();

			this.user = data.user;
			this.accessToken = data.accessToken;
			return data;
		},

		logout() {
			localStorage.removeItem('accessToken');
		},

		hydrate(hydrateData: TAuthStoreState) {
			if (!hydrateData) return;

			this.user = hydrateData.user;
			this.accessToken = hydrateData.accessToken;
		},
	});

type TCreateAuthStore = ReturnType<typeof createAuthStore>;

export { createAuthStore };
export type { User, TCreateAuthStore, TAuthStoreState, SignupReqestParam, LoginReqestParam };

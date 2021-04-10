import { makeAutoObservable } from 'mobx';
import Router from 'next/router';

interface User {
	email: string;
	password: string;
	username: string;
	tel: string;
}

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

type LoginResponseParam = {
	user: User;
	accessToken: string;
};

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

console.log(data)
			if (data.errorCode) {
				throw data;
			}


			this.user = data.user;
			this.accessToken = data.accessToken;
			localStorage.setItem('token', this.accessToken || '');

			return data;
		},

		async login(body: LoginReqestParam) {
			const res = await fetch('/api/login', {
				method: 'post',
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await res.json();

			if (data.errorCode) {
				throw data;
			}

			this.user = data.user;
			this.accessToken = data.accessToken;
			localStorage.setItem('token', this.accessToken || '');

			return data;
		},

		async me() {
			const token = localStorage.getItem('token') || '';

			if (!token) {
				return;
			}
			const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/me', {
				headers: { Authorization: token },
			});

			const data = await res.json();

			this.user = data;
			this.accessToken = token;

			return data;
		},

		logout() {
			localStorage.removeItem('token');
			this.user = null;
			this.accessToken = null;
			return true;
		},

		hydrate(hydrateData: TAuthStoreState) {
			if (!hydrateData) return;

			this.user = hydrateData?.user;
			this.accessToken = hydrateData?.accessToken;
		},

		get isLoginned() {
			return !!this.user;
		},
	});

type TCreateAuthStore = ReturnType<typeof createAuthStore>;

export { createAuthStore };
export type {
	User,
	TCreateAuthStore,
	TAuthStoreState,
	SignupReqestParam,
	LoginReqestParam,
	LoginResponseParam,
};

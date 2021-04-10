import { makeAutoObservable } from 'mobx';

interface Comments {
	id: number;
	contentId: number;
	userId: number;
	body: string;
	createdAt: string;
}

type TCommentsStoreState = {
	contentsIdWithCommentsList: [number, Comments[]];
};

const createCommentsStore = () =>
	makeAutoObservable({
		commentsListByContentsId: new Map<number, Comments[]>(),

		async loadCommentsByContentsId(id: number) {
			const token = localStorage.getItem('token') || '';

			const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/contents/${id}/comments`, {
				headers: { Authorization: token },
			});
			const data = await res.json();

			if (data.errorCode) {
				throw data;
			}

			this.commentsListByContentsId.set(id, data);

			return data;
		},

		async createCommentsByContentsId(id: number, body: string) {
			const token = localStorage.getItem('token') || '';

			const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/contents/${id}/comments`, {
				method: 'post',
				body: JSON.stringify({ body }),
				headers: { Authorization: token, 'Content-Type': 'application/json' },
			});

			const data = await res.json();

			if (data.errorCode) {
				throw data;
			}

			this.commentsListByContentsId.get(id)?.unshift(data);

			return data;
		},

		hydrate(hydrateData: TCommentsStoreState) {
			if (!hydrateData) return;

			if (hydrateData?.contentsIdWithCommentsList) {
				const data = hydrateData.contentsIdWithCommentsList;
				this.commentsListByContentsId.set(data[0], data[1]);
			}
		},
	});

type TCreateCommentsStore = ReturnType<typeof createCommentsStore>;

export { createCommentsStore };
export type { Comments, TCreateCommentsStore, TCommentsStoreState };

import { makeAutoObservable } from 'mobx';

interface Course {
	id: number;
	title: string;
	description: string;
	thumbnailURL: string;
}
interface CourseList extends Array<Course> {}
interface CourseContents {
	id: number;
	courseId: number;
	body: string;
	order: number;
}

type TCourseStoreState = {
	data: Map<number, Course>;
	list: CourseList;
};

const createCourseStore = () =>
	makeAutoObservable({
		data: new Map<number, Course>(),
		list: [] as CourseList,

		hydrate(hydrateData: TCourseStoreState) {
			if (!hydrateData) return;

			this.data = hydrateData.data;
			this.list = hydrateData.list;
		},
	});

type TCreateCourseStore = ReturnType<typeof createCourseStore>;

export { createCourseStore };
export type { Course, CourseContents, TCreateCourseStore, TCourseStoreState };

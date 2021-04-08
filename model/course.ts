interface Course {
	id: number;
	title: string;
	description: string;
	thumbnailURL: string;
}
interface CourseContents {
	id: number;
	courseId: number;
	body: string;
	order: number;
}

export type { Course, CourseContents };

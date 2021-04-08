// courses/[id].tsx

import { useRouter } from 'next/router';

interface CourseProp {}
const Course = ({}: CourseProp) => {
	const router = useRouter();
	const { id } = router.query;

	return <div>courses: {id}</div>;
};

export default Course;

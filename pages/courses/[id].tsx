// courses/[id].tsx

import { useRouter } from 'next/router';
import { Container } from '../../components/base/container';

interface CourseProp {}
const Course = ({}: CourseProp) => {
	const router = useRouter();
	const { id } = router.query;

	return <Container>courses: {id}</Container>;
};

export default Course;

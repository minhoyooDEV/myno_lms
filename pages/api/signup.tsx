import withSession from '../../lib/session';
import { LoginReqestParam, LoginResponseParam } from '../../model/auth';

export default withSession(async (req, res) => {
	const body: LoginReqestParam = await req.body;
	const url = `${process.env.API_HOST}/signup`;

	try {
		const response = await fetch(url, {
			method: 'post',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		});
		const data: LoginResponseParam = await response.json();
		const { user, accessToken } = data;
		req.session.set('user', user);
		req.session.set('accessToken', accessToken);
		await req.session.save();

		res.json(data);
	} catch (error) {
		const { response: fetchResponse } = error;
		res.status(fetchResponse?.status || 500).json(error.data);
	}
});

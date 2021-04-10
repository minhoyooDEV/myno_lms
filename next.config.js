module.exports = {
	async rewrites() {
		return [
			{
				source: '/login',
				destination: '/members/sign-in',
			},
		];
	},
	async redirects() {
		return [
			{ source: '/', destination: '/courses', permanent: true }, // a permanent redirect
		];
	},
};

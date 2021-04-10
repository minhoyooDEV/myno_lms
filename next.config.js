module.exports = {
	// TODO: find smart way!
	async redirects() {
		return [
			{ source: '/', destination: '/courses', permanent: true }, // a permanent redirect
		];
	},
};

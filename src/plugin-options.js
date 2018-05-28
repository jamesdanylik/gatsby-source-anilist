import yup from 'yup';

export const schema = yup.object().shape({
	queries: yup
		.array()
		.min(1)
		.required(),
	url: yup
		.string()
		.default('https://graphql.anilist.co')
});
export default {
	id: 'aboutPage',
	title: 'About Page',
	name: 'aboutPage',
	type: 'document',
	fields: [
		{
			title: 'SEO',
			name: 'seo',
			type: 'seo'
		},
		{
			title: 'Sections',
			name: 'sections',
			type: 'array',
			of: [
				{
					title: 'About Banner',
					type: 'aboutBanner'
				},
				{
					title: 'Row Banner',
					type: 'rowBanner'
				},
				{
					title: 'Team Mission',
					type: 'aboutMission'
				}
			]
		}
	],
	preview: {
		select: {
			title: 'seo.title',
			media: 'seo.ogImage'
		}
	}
};

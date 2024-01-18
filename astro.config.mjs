import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Yolm Documentation',
			social: {
				github: 'https://github.com/yolmio/docs',
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
						{ label: 'What is Yolm?', link: '/' },
						{ label: 'Installation', link: '/installation' },

					],
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Concepts',
					autogenerate: { directory: 'concepts' },
				},
				{
					label: 'Recipes',
					items: [
						{ label: "Introduction", link: "recipes/introduction" },
						{ label: "Renaming", link: "recipes/rename" },
						{ label: "Basics", autogenerate: { directory: "recipes/basics", collapsed: true } },
						{ label: "Advanced", autogenerate: { directory: "recipes/advanced", collapsed: true } },
					],
				},
				{
					label: 'Reference', items: [
						{ label: "Database Limits", link: "reference/limits" },
						{ label: "Data Types", autogenerate: { directory: "reference/data_types" } },
						{ label: "Functions", autogenerate: { directory: "reference/functions" } },
					],
				},
				{ label: 'FAQ', link: "faq" }
			],
		}),
	],
});

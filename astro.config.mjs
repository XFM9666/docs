// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TrucklineMP',
			logo: {
				src: './src/assets/truckline_large_no_shadow.svg',
				alt: 'TrucklineMP',
				replacesTitle: true,
			},
			favicon: '/truckline_no_shadow.svg',
			customCss: [
				'@fontsource-variable/geist',
				'@fontsource-variable/geist-mono',
				'./src/styles/marathon.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Server Rules', slug: 'guides/rules' },
						{ label: 'FAQ', slug: 'guides/faq' },
					],
				},
				{
					label: 'Platform',
					items: [
						{ label: 'Features', slug: 'guides/features' },
					],
				},
			],
		}),
	],
});

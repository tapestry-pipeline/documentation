const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tapestry',
  tagline: 'Pipeline orchestration framework for user entity data',
  url: 'https://tapestry-pipeline.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tapestry_graphic_color.ico',
  organizationName: 'tapestry-pipeline', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tapestry Pipeline',
      logo: {
        alt: 'Tapestry Logo',
        src: 'img/tapestry_graphic_color.png',
      },
      items: [],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Tapestry Resources',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/tapestry-pipeline' 
            },
            {
              label: 'Case Study',
              href: 'https://tapestry-pipeline.github.io'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tapestry Pipeline`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

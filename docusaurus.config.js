const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Mordheim Assault",
    tagline: "Mordheim, the City of the Damned",
    url: "https://mordheim-assault.owlbeardm.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.png",
    organizationName: "c7d5a6", // Usually your GitHub org/user name.
    projectName: "mordheim-assault", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // editUrl:
              // "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // editUrl:
              // 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({
        navbar: {
          title: "Mordheim Assault",
          logo: {
            alt: "Mordheim Assault",
            src: "img/mordheim_intro_logo.gif",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Rules",
            },
            {to: '/blog', label: 'Reports', position: 'left'},
          ],
        },
        footer: {
          style: "light",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Campain",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Broheim",
                  href: "http://broheim.net/",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/c7d5a6/mordheim-assault",
                },
              ],
            },
          ],
          copyright: `${new Date().getFullYear()} @c7d5a6.`,
        },
        prism: {
          theme: lightCodeTheme,
          // darkTheme: darkCodeTheme,
        },
        colorMode: {
          // "light" | "dark"
          defaultMode: "light",
          disableSwitch: true,
        },
      }),
  }
);

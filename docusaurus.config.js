// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yolm Documentation",
  tagline: "The Web App Platform",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://yolm.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yolmio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["docusaurus-theme-search-typesense"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
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
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: "yolmdocs",

        typesenseServerConfig: {
          nodes: [
            {
              host: "yhoscgent1m2vifbp-1.a1.typesense.net",
              port: 443,
              protocol: "https",
            },
          ],
          apiKey: "sBLHK9IZQxadoK1dT2WOrcD5FrnLpMve",
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
      metadata: [
        {
          name: "keywords",
          content: "Yolm, PWA, web application, web app, Low Code, SQL, PAAS",
        },
      ],
      navbar: {
        title: "Yolm Documentation",
        logo: {
          alt: "Yolm Documentation Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialsSidebar",
            position: "left",
            label: "Tutorials",
          },
          {
            type: "docSidebar",
            sidebarId: "recipesSidebar",
            position: "left",
            label: "Recipes",
          },
          {
            type: "docSidebar",
            sidebarId: "referenceSidebar",
            position: "left",
            label: "Reference",
          },
          {
            type: "docSidebar",
            sidebarId: "referenceSidebar",
            position: "left",
            label: "Concepts",
          },
          {
            type: "docSidebar",
            sidebarId: "faqSidebar",
            position: "left",
            label: "FAQ",
          },
          {
            href: "https://github.com/yolmio/boost",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorials",
                to: "/tutorials",
              },
              {
                label: "Recipes",
                to: "/recipes",
              },
              {
                label: "Reference",
                to: "/reference",
              },
              {
                label: "Concepts",
                to: "/concepts",
              },
              {
                label: "FAQ",
                to: "/faq",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/yolm",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/yolm",
                //https://discord.com/channels/1122216895295262891/1122216895295262894
              },
              {
                label: "Twitter",
                href: "https://twitter.com/yolmhq",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/yolmio/boost",
              },
              {
                label: "Youtube",
                href: "https://youtube.com/user/yolm",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yolm, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        entryPoints: ["../boost/src/yom.ts"],
        tsconfig: "../boost/tsconfig.json",

        excludePrivate: true,
        readme: "./YOM_README.md",

        out: "reference/yom",
        sidebar: {
          categoryLabel: "Yolm Object Model",
        },
        frontmatter: {
          pagination_prev: null,
          pagination_next: null,
          title: "Yolm Object Model",
        },
      },
    ],
  ],
};

module.exports = config;

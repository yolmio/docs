import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Yolm Documentation",
      social: {
        github: "https://github.com/yolmio/boost",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [{ label: "What is Yolm?", link: "/" }],
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
        {
          label: "Recipes",
          autogenerate: { directory: "recipes", collapsed: true },
        },
        {
          label: "Reference",
          items: [
            {
              label: "Data Types",
              autogenerate: { directory: "reference/data_types" },
            },
            {
              label: "Functions",
              autogenerate: { directory: "reference/functions" },
            },
            { label: "System Ui Tables", link: "reference/ui_table" },
          ],
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
        { label: "FAQ", link: "faq" },
      ],
    }),
  ],
});

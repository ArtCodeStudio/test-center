import type { ThemeConfig } from "@ribajs/ssr";

export const themeConfig: ThemeConfig = {
  name: "@test-center/theme",
  viewEngine: "pug",
  assetsDir: "assets",
  viewsDir: "templates",
  pageComponentsDir: "scripts/ssr/pages",
  ssr: {
    rootTag: "ssr-root-page",
    template: "page-component.pug",
  },
  routes: [
    {
      path: ["/"],
      component: "index-page",
    },
  ],
  errorRoutes: {
    404: {
      component: "not-found-page",
    },
    500: {
      component: "error-page",
    },
  },
};

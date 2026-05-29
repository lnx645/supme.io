import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypedCSSModules(),
    pluginSvgr({
      svgrOptions: {
        exportType: "default",
      },
    }),
  ],
  source: {
    entry: {
      app: "./app/main.tsx",
    },
  },
  server: {
    publicDir: false,
  },
  splitChunks: {
    preset: "per-package",
  },
  tools: {
    rspack: {
      optimization: {
        splitChunks: false,
        runtimeChunk: false,
      },
    },
  },
  mode: "production",
  output: {
    target: "web",
    filenameHash: false,
    cleanDistPath: false,
    distPath: {
      root: "../app/public/dist",
    },
  },
});

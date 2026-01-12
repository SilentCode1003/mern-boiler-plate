import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  console.log(env.VITE_ENV);

  return {
    plugins: [react()],
    server: {
      port: env.VITE_SERVER_PORT,
      allowedHosts: env.VITE_ALLOWED_ORIGIN ? env.VITE_ALLOWED_ORIGIN.split(',') : [],
      proxy: {
        "/api": {
          target:
            env.VITE_ENV == "development"
              ? env.VITE_DEVELOPMENT_API
              : env.VITE_PRODUCTION_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      port: env.VITE_SERVER_PORT,
     allowedHosts: env.VITE_ALLOWED_ORIGIN ? env.VITE_ALLOWED_ORIGIN.split(',') : [],
      proxy: {
        "/api": {
          target:
            env.VITE_ENV == "development"
              ? env.VITE_DEVELOPMENT_API
              : env.VITE_PRODUCTION_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "dist", // output directory
      rollupOptions: {
        // Customize Rollup bundler options
      },
      target: "es2022", // browser compatibility target, e.g. 'es2015'
      cssTarget: "es2022", // CSS compatibility target
      minify: "terser", // minifier to use, can be false to disable
      sourcemap: false, // whether to generate source maps
      emptyOutDir: true, // clean output directory before build
    },
    esbuild: {
      target: "es2022", // specify ECMAScript target version
    },
  };
});

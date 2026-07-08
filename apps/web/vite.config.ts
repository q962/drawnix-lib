/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/web',

  server: {
    port: 7200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },

  build: {
    outDir: '../../dist/apps/web',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },

    // Prevent \UXXXX to be converted to Unicode characters in the output
    minify: 'terser',
    terserOptions: {
      format: {
        ascii_only: true,
      },
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'drawnix',
      fileName: 'drawnix',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['iife'],
    },

    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        '@plait-board/mermaid-to-drawnix',
        '@plait-board/markdown-to-drawnix',
      ]
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      reportsDirectory: '../../coverage/apps/web',
      provider: 'v8',
    },
  },
});

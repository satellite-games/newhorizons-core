import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'app/public',
  plugins: [
    dts({
      include: ['lib/**/*'],
      exclude: ['lib/**/*.{test,spec}.*'],
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib'),
      name: '@newhorizons/core',
      formats: ['es'],
      fileName: `index`,
    },
  },
});

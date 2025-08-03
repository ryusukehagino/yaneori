import { BASE_HOST, BASE_DIR } from './src/consts.js';
import { defineConfig } from 'astro/config';

// path
const baseUrl = BASE_HOST + BASE_DIR;

// ビルド時に除外するディレクトリ
export const EXCLUDES = ['components'];

// https://astro.build/config
export default defineConfig({
    site: baseUrl,
    outDir: './dist' + BASE_DIR,
    base: BASE_DIR,
    scopedStyleStrategy: 'class',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                additionalData: `
                    @use "sass:math";
                    @use "sass:map";
                    @use "@styles/global" as g;
                `
                }
            }
        },
        resolve: {
            alias: {
                '@components': '/src/components',
                '@layouts': '/src/layouts',
                '@styles': '/src/styles',
                '@scripts': '/src/scripts',
            }
        },
    }
});

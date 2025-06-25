// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    scopedStyleStrategy: 'class',
    build: {
        format: 'preserve'
    },
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

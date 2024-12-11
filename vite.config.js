import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        react({
            fastRefresh: false,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve('./resources/ts'),
        },
    },
});

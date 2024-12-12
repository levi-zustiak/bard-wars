import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import '../css/app.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';

import { theme } from '@/theme';

void createInertiaApp({
    resolve: (path) => {
        const pages = import.meta.glob(
            './pages/**/*{page,index,show,create,update}.tsx',
            {
                import: 'Page',
                eager: true,
            },
        );

        const layouts = Object.entries(
            import.meta.glob('./pages/**/*layout.tsx', {
                import: 'Layout',
                eager: true,
            }),
        )
            .filter(([file]) => {
                const pattern = /\.\/pages|\/layout\.tsx/g;

                const segment = file.replace(pattern, '');

                console.log(segment);

                return (
                    path.split('/').some((s) => segment.includes(s)) ||
                    segment === ''
                );
            })
            .sort(([keyA], [keyB]) => keyA.length - keyB.length)
            .map(([_, layout]) => layout);

        const page = pages[`./pages/${path}.tsx`];

        page.layout = layouts;

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <MantineProvider theme={theme}>
                <App {...props} />
            </MantineProvider>,
        );
    },
});

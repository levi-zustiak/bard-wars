import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css';
import { createRoot } from "react-dom/client";

void createInertiaApp({
    resolve: (path) => {
        const pages = import.meta.glob('./pages/**/*page.tsx', {
            import: 'Page',
            eager: true,
        });

        const layouts = Object.entries(
            import.meta.glob('./pages/**/*layout.tsx', {
                import: 'Layout',
                eager: true,
            }),
        )
            .filter(([file]) => {
                const pattern = /\.\/pages|\/layout\.tsx/g;

                const path = file.replace(pattern, '');

                return path.includes(path);
            })
            .sort(([keyA], [keyB]) => keyA.length - keyB.length)
            .map(([_, layout]) => layout);

        const page = pages[`./pages/${path}/page.tsx`];

        page.layout = layouts;

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

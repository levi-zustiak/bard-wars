import { ReactElement } from 'react';
import { Navigation } from '@/components/Navigation';
import { ToastProvider } from '@/components/ToastProvider';

export function Layout({ children }: { children: ReactElement }): ReactElement {
    return (
        <div className="layout">
            <Navigation />
            <main className="p-16" style={{ gridArea: 'content' }}>
                {children}
            </main>
            <ToastProvider />
        </div>
    );
}

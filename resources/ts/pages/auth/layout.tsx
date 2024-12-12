import { ReactElement } from 'react';

export function Layout({ children }: { children: ReactElement }) {
    return (
        <div className="grid place-items-center w-full h-full">{children}</div>
    );
}

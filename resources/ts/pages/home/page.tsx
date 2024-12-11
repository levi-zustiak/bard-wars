import { ReactElement } from 'react';

export function Page(): ReactElement {
    return (
        <div
            style={{
                display: 'grid',
                placeItems: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
            <h1 className="text-6xl text-bold">Bard Wars</h1>
        </div>
    );
}

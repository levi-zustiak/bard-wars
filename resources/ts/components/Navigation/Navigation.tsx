import { ReactElement } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { AuthUser } from '@/types/auth';
import { Account } from '@/components/Navigation/Account';
import { Button } from '@mantine/core';

export function Navigation(): ReactElement {
    const { auth } = usePage<{ auth: { user: AuthUser } }>().props;

    const loggedIn = auth.user != null;

    return (
        <nav
            className="h-full border-r border-solid border-base-200 flex flex-col p-6"
            style={{
                gridArea: 'nav',
            }}
        >
            <h2 className="text-2xl font-bold whitespace-nowrap">Bard Wars</h2>
            {loggedIn && (
                <div className="flex flex-col gap-2 mt-4">
                    <Button href="/dashboard" component={Link}>
                        Dashboard
                    </Button>
                    <Button href="/decks" component={Link}>
                        Decks
                    </Button>
                    <Button href="/cards" component={Link}>
                        Cards
                    </Button>
                </div>
            )}
            <div className="flex gap-2 mt-auto">
                {loggedIn ? (
                    <Account />
                ) : (
                    <Button href="/login" component={Link}>
                        Log in
                    </Button>
                )}
            </div>
        </nav>
    );
}
import { ReactElement } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { AuthUser } from '@/types/auth';
import { Account } from '@/components/Navigation/Account';
import { Button } from '@mantine/core';
import { Home, Layers, LayoutGrid, SquareChartGantt } from 'lucide-react';

import styles from './Navigation.module.css';

export function Navigation(): ReactElement {
    const { auth } = usePage<{ auth: { user: AuthUser } }>().props;

    const loggedIn = auth.user != null;

    return (
        <nav
            className={styles.nav}
            style={{
                gridArea: 'nav',
            }}
        >
            <div className={styles.innerNav}>
                <h2 className="text-2xl font-bold whitespace-nowrap">
                    Bard Wars
                </h2>
                {loggedIn && (
                    <div className="flex gap-2">
                        <Button
                            href="/dashboard"
                            component={Link}
                            variant="outline"
                            leftSection={<Home size={18} />}
                        >
                            Dashboard
                        </Button>
                        <Button
                            href="/decks"
                            component={Link}
                            variant="outline"
                            leftSection={<Layers size={18} />}
                        >
                            Decks
                        </Button>
                        <Button
                            href="/cards"
                            component={Link}
                            variant="outline"
                            leftSection={<LayoutGrid size={18} />}
                        >
                            Cards
                        </Button>
                    </div>
                )}
                <div className="flex gap-2 mt-auto">
                    {loggedIn ? (
                        <Account />
                    ) : (
                        <Button
                            href="/login"
                            component={Link}
                            variant="outline"
                        >
                            Log in
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
}

import { ReactElement } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { AuthUser } from '@/types/auth';
import { Avatar, Button, Menu } from '@mantine/core';
import styles from './account.module.css';

export function Account(): ReactElement {
    const { auth } = usePage<{ auth: { user: AuthUser } }>().props;

    return (
        <Menu>
            <Menu.Target>
                <Button
                    // className="w-full flex gap-4 bg-neutral-content hover:bg-base-200 rounded-xl p-4"
                    className={styles.accountButton}
                >
                    <div className={styles.account}>
                        <Avatar src={auth.user.avatar} alt="user-avatar" />
                        <div>
                            <h4>{auth.user.name}</h4>
                            <h6 className="text-base-300">{auth.user.email}</h6>
                        </div>
                    </div>
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item color="red" href="/logout" component={Link}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

import { ReactElement } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { AuthUser } from '@/types/auth';
import { Avatar, Menu, UnstyledButton } from '@mantine/core';
import styles from './Account.module.css';

export function Account(): ReactElement {
    const { auth } = usePage<{ auth: { user: AuthUser } }>().props;

    return (
        <Menu>
            <Menu.Target>
                <UnstyledButton
                    variant="subtle"
                    color="secondary"
                    className={styles.accountButton}
                >
                    <div className={styles.account}>
                        <Avatar src={auth.user.avatar} alt="user-avatar" />
                        <h4 className="text-lg">{auth.user.name}</h4>
                    </div>
                </UnstyledButton>
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

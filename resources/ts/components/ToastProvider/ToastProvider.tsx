import { ReactElement, useEffect } from 'react';

import { usePage } from '@inertiajs/react';
import { notifications, Notifications } from '@mantine/notifications';

interface Flash {
    success: string | null;
    error: string | null;
    info: string | null;
    warning: string | null;
}

export function ToastProvider(): ReactElement {
    const { flash } = usePage<{ flash: Flash }>().props;

    useEffect(() => {
        if (flash.success != null) {
            notifications.show({
                title: 'Success',
                message: flash.success,
                color: 'green',
            });
        }

        if (flash.error != null) {
            notifications.show({
                title: 'Error',
                message: flash.error,
                color: 'red',
            });
        }

        if (flash.info != null) {
            notifications.show({
                title: 'Info',
                message: flash.info,
                color: 'blue',
            });
        }

        if (flash.info != null) {
            notifications.show({
                title: 'Warning',
                message: flash.warning,
                color: 'yellow',
            });
        }
    }, [flash]);

    return <Notifications />;
}

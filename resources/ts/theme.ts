import { Button, createTheme } from '@mantine/core';
import buttonStyles from '../css/Button.module.css';

export const theme = createTheme({
    defaultRadius: 'md',
    components: {
        Button: Button.extend({ classNames: buttonStyles })
    },
});

import { Button, createTheme, PasswordInput, TextInput } from '@mantine/core';
import buttonStyles from '../css/Button.module.css';

export const theme = createTheme({
    defaultRadius: 'md',
    primaryColor: 'dark',
    components: {
        Button: Button.extend({
            classNames: buttonStyles,
        }),
        TextInput: TextInput.extend({
            defaultProps: {
                variant: 'filled',
            },
        }),
        PasswordInput: PasswordInput.extend({
            defaultProps: {
                variant: 'filled',
            },
        }),
    },
});

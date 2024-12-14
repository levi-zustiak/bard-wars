import { FormEvent, ReactElement } from 'react';
import { Link, usePage, useForm } from '@inertiajs/react';
import { Button, Paper, TextInput, PasswordInput, Stack } from '@mantine/core';

type FormData = {
    email: string;
    password: string;
};

export function Page(): ReactElement {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm<FormData>();

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <Paper p="xl" withBorder>
            <form onSubmit={submit}>
                <Stack>
                    <h1 className="text-2xl font-black">Login</h1>
                    <TextInput
                        label="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                        variant="filled"
                    />
                    <PasswordInput
                        label="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                    />
                    <Button type="submit" fullWidth>
                        Login
                    </Button>
                </Stack>
            </form>
            <div className="mt-4 flex items-center">
                <p className="text-base-300">Don't have an account?</p>
                <Button href="/register" component={Link}>
                    Register
                </Button>
            </div>
        </Paper>
    );
}

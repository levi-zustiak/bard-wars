import { FormEvent, ReactElement } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Button, Paper, TextInput, PasswordInput, Stack } from '@mantine/core';

type FormData = {
    name: string;
    email: string;
    password: string;
};

export function Page(): ReactElement {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm<FormData>();

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <Paper p="xl">
            <form onSubmit={submit}>
                <Stack>
                    <h1 className="text-2xl font-black">Register</h1>
                    <TextInput
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors.name}
                    />
                    <TextInput
                        label="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                    />
                    <PasswordInput
                        label="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                    />
                    <Button type="submit" fullWidth>
                        Register
                    </Button>
                </Stack>
            </form>
            <div className="mt-4 flex items-center">
                <p className="text-base-300">Already have an account?</p>
                <Button href="/login" component={Link} variant="link">
                    Login
                </Button>
            </div>
        </Paper>
    );
}

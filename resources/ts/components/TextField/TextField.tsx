import { ChangeEvent, ReactElement } from 'react';
import { TextInput } from '@mantine/core';

interface TextFieldProps {
    label: string;
    error?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({
    label,
    value,
    onChange,
    error,
}: TextFieldProps): ReactElement {
    return (
        <TextInput
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            // className="input input-bordered w-full max-w-xs"
        />
    );
}

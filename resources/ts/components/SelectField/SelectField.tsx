import { ReactElement } from 'react';

type SelectFieldProps = {
    label: string;
    options: Array<{ label: string; value: string }>;
    error?: string;
};

export function SelectField(props: SelectFieldProps): ReactElement {
    const { label, options, error, ...inputProps } = props;

    return (
        <div>
            <select className="select w-full max-w-xs" {...inputProps}>
                {options.map(({ label, value }) => (
                    <option>{label}</option>
                ))}
            </select>
            {error && <p className="text-error">{error}</p>}
        </div>
    );
}

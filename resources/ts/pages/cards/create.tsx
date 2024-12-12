import { FormEvent, ReactElement } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { TextField } from '@/components/TextField';
import {
    Button,
    Group,
    NumberInput,
    Paper,
    Select,
    Stack,
    Text,
    Textarea,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

const landscapes = [
    {
        label: 'Blue Plains',
        value: 'blue plains',
    },
    {
        label: 'Cornfield',
        value: 'cornfield',
    },
    {
        label: 'Nicelands',
        value: 'nicelands',
    },
    {
        label: 'Useless Swamp',
        value: 'useless swamp',
    },
    {
        label: 'Sandylands',
        value: 'sandylands',
    },
    {
        label: 'Icylands',
        value: 'icylands',
    },
    {
        label: 'Rainbow',
        value: 'rainbow',
    },
];

const types = [
    {
        label: 'Creature',
        value: 'creature',
    },
    {
        label: 'Spell',
        value: 'spell',
    },
    {
        label: 'Building',
        value: 'building',
    },
];

type FormData = {
    name: string;
    ability: string;
    landscape: string | null;
    type: string | null;
    cost?: number | string;
    attack?: number | string;
    defense?: number | string;
    image: any;
};

export function Page(): ReactElement {
    const { errors } = usePage().props;
    const { data, setData, post, progress } = useForm<FormData>({
        name: '',
        ability: '',
        landscape: '',
        type: '',
        cost: undefined,
        attack: undefined,
        defense: undefined,
        image: undefined,
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/cards');
    };

    return (
        <Paper withBorder p="lg" radius="lg">
            <form onSubmit={submit}>
                <Stack>
                    <h1>Add Card</h1>
                    <TextField
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors.name}
                    />
                    <Select
                        label="Landscape"
                        data={landscapes}
                        // value={data.landscape}
                        onChange={(_value, option) =>
                            setData('landscape', _value)
                        }
                        error={errors.landscape}
                    />
                    <Select
                        label="Type"
                        data={types}
                        onChange={(_value) => setData('type', _value)}
                        error={errors.type}
                    />
                    <Textarea
                        label="Ability"
                        value={data.ability}
                        onChange={(e) => setData('ability', e.target.value)}
                        error={errors.ability}
                    />
                    <NumberInput
                        label="Cost"
                        value={data.cost}
                        onChange={(v) => setData('cost', v)}
                        error={errors.cost}
                    />
                    <NumberInput
                        label="Attack"
                        value={data.attack}
                        onChange={(v) => setData('attack', v)}
                        error={errors.attack}
                    />
                    <NumberInput
                        label="Defense"
                        value={data.defense}
                        onChange={(v) => setData('defense', v)}
                        error={errors.defense}
                    />
                    <Dropzone
                        onDrop={(files) => setData('image', files[0])}
                        maxSize={5 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                    >
                        <Group
                            justify="center"
                            gap="xl"
                            mih={220}
                            style={{ pointerEvents: 'none' }}
                        >
                            {/*<Dropzone.Accept>*/}
                            {/*    /!*<IconUpload stroke={1.5}/>*!/*/}
                            {/*</Dropzone.Accept>*/}
                            <div>
                                <Text size="xl" inline>
                                    Drag image here or click to select a file
                                </Text>
                                <Text size="sm" c="dimmed" inline mt={7}>
                                    Attach as many files as you like, each file
                                    should not exceed 5mb
                                </Text>
                            </div>
                        </Group>
                    </Dropzone>
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    <Button type="submit">Add Card</Button>
                </Stack>
            </form>
        </Paper>
    );
}

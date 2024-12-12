import { ReactElement } from 'react';
import { Link } from '@inertiajs/react';
import { Card } from '@/components/Card/Card';
import { ICard } from '@/types';
import { Button } from '@mantine/core';

type PageProps = {
    cards: ICard[];
};

export function Page({ cards }: PageProps): ReactElement {
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Cards</h1>
                <Link href="/cards/create">
                    <Button>Add Card</Button>
                </Link>
            </div>
            <div className="flex gap-2">
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
}

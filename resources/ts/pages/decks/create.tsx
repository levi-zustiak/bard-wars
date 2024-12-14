import { ReactElement, useEffect } from 'react';
import { ICard } from '@/types';
import { useForm } from '@inertiajs/react';
import { SelectableCard } from '@/pages/decks/components/SelectableCard';
import { notifications } from '@mantine/notifications';

import s from './styles/create.module.css';
import { Button } from '@mantine/core';

type PageProps = {
    cards: ICard[];
};

type FormData = {
    cards: Record<number, { card: ICard; count: number }>;
};

export function Page({ cards }: PageProps): ReactElement {
    const { data, setData } = useForm<FormData>({ cards: {} });

    const handleCardClick = (card: ICard, action: 'add' | 'remove') => {
        if (action === 'add') {
            handleAdd(card);
        } else {
            handleRemove(card);
        }
    };

    const handleAdd = (card: ICard) => {
        const cards = data.cards;
        const c = cards[card.id];

        if (c == null) {
            cards[card.id] = { card, count: 1 };
        } else if (c?.count < 3) {
            cards[card.id] = { card, count: c.count + 1 };
        } else {
            notifications.show({
                title: 'Oops',
                message: "Looks like you've reached the limit for this card",
                color: 'red',
            });
        }

        setData('cards', cards);
    };

    const handleRemove = (card: ICard) => {
        const cards = data.cards;
        const c = cards[card.id];

        if (c == null) return;

        if (c.count === 1) {
            delete cards[card.id];
        } else {
            cards[card.id] = { card, count: c.count - 1 };
        }
        setData('cards', cards);
    };

    const clearSelection = () => {
        setData('cards', {});
    };

    return (
        <div className={s.container}>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold mb-4">Deck</h3>
                    {Object.values(data.cards).length > 0 && (
                        <Button onClick={clearSelection}>Clear</Button>
                    )}
                </div>
                <div className={s.selectedContainer}>
                    {Object.values(data.cards).map(({ card, count }) => (
                        <>
                            {Array(count).fill(
                                <SelectableCard
                                    card={card}
                                    handleClick={handleRemove}
                                    selected
                                />,
                            )}
                        </>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Cards</h3>
                <div className="flex gap-2">
                    {cards.map((card) => (
                        <SelectableCard
                            card={card}
                            handleClick={handleAdd}
                            selected
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

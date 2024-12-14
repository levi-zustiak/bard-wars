import { ReactElement } from 'react';
import type { ICard, Deck } from '@/types';
import { Card } from '@/components/Card';

interface PageProps {
    deck: Deck & { cards: ICard[] };
}

export function Page({ deck }: PageProps): ReactElement {
    return (
        <div>
            <div>
                {deck.cards.map((card) => (
                    <Card {...card} />
                ))}
            </div>
        </div>
    );
}

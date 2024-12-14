import { ReactElement } from 'react';
import { Card } from '@/components/Card';
import { ICard } from '@/types';
import { clsx } from 'clsx';

import s from './SelectableCard.module.css';
import { Check } from 'lucide-react';

type SelectableCardProps = {
    card: ICard;
    handleClick: (card: ICard) => void;
    selected: boolean;
};

export function SelectableCard({
    card,
    handleClick,
    selected,
}: SelectableCardProps): ReactElement {
    return (
        <div
            onClick={() => handleClick(card)}
            className={clsx(s.container, { [s.selected]: selected })}
        >
            <Card {...card} />
        </div>
    );
}

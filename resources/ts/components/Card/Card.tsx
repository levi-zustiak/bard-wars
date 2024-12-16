import { ReactElement } from 'react';
import { ICard } from '@/types';

type CardProps = ICard;

export function Card({ name, image }: CardProps): ReactElement {
    return (
        <div
            style={{
                height: 'auto',
                width: '185px',
                borderRadius: '4%',
                overflow: 'hidden',
            }}
        >
            <img src={image} alt={`${name}-card-image`} />
        </div>
    );
}

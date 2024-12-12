import { ReactElement } from 'react';
import { Deck } from '@/types';
import { Link } from '@inertiajs/react';

type PageProps = {
    decks: Array<Deck & { card_count: number }>;
};

export function Page({ decks }: PageProps): ReactElement {
    return (
        <div>
            <h1>Decks</h1>
            <div className="flex flex-col gap-4">
                {decks.map((deck) => (
                    <div className="card bordered p-4 w-60">
                        <h2 className="card-title">{deck.name}</h2>
                        <div className="card-body">
                            <div className="card-actions">
                                <Link
                                    href={`/decks/${deck.id}`}
                                    className="btn"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

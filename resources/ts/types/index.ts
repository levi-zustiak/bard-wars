import { User } from '@/types/auth';

export enum Landscapes {
    BLUE_PLAINS = 'blue plains',
    CORNFIELD = 'cornfield',
    NICELANDS = 'nicelands',
    USELESS_SWAMP = 'useless swamp',
    SANDYLANDS = 'sandylands',
    ICYLANDS = 'icylands',
    RAINBOW = 'rainbow',
}

export enum Types {
    CREATURE = 'creature',
    SPELL = 'spell',
    BUILDING = 'building',
}

export interface Deck {
    id: number;
    owner: User;
    name: string;
    description: string | null;
}

export interface ICard {
    id: number;
    name: string;
    landscape: Landscapes;
    type: Types;
    ability: string;
    cost: number;
    attack: number;
    defense: number;
    image: string;
}

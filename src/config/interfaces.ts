export interface UserInterface {
    id: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface TreasureInterface {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
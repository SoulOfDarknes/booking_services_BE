export interface Bicycle {
    name: string;
    type: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: 'available' | 'busy' | 'unavailable';
}
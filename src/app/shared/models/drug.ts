import { Prescription } from './prescription';

export class Drug {
    id: number;
    name: string;
    description: string;
    startingDate: Date;
    endingDate: Date;
    takePerDay: number;
    moments: string[];
    prescription: Prescription;

    constructor(drug: Drug) {
        Object.assign(this, drug);
    }
}

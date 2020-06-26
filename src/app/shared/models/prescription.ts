import { User } from './user';
import { Drug } from './drug';

export class Prescription {
    id: string;
    dateCreation: Date;
    author: string;
    user: User;
    drugs: Drug[];

    constructor(prescrition?: Prescription) {
        Object.assign(this, prescrition);
    }
}

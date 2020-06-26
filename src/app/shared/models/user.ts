import { Prescription } from './prescription';

export class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    birthday: Date;
    password: string;
    prescriptions: Prescription[];

    constructor(user: User) {
        Object.assign(this, user);
    }
}

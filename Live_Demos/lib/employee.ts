import { Person } from './person';

export class Employee extends Person
{
    //private job:string;
    constructor(first:string, last:string, age:number, private job:string)
    {
        super(first, last, age);
    }
}
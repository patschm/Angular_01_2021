import { IIntroducable } from './iintroducable';

export class Person implements IIntroducable
{
    // private first:string;
    // private last:string;
    // private age:number;

    constructor(private first:string, private last:string, private age:number)
    {
        // this.first = first;
        // this.last = last;
        // this.age = age;
    }

    public set Age(ag:number)
    {
        if (ag >= 0 && ag < 123)
        {
            this.age = ag;
        }
    }
    public get Age(): number
    {
        return this.age;
    }

    public introduce():void
    {
        console.log(`Hello, I'm ${this.first} ${this.last} and I'm ${this.age} years old`);
    }
}



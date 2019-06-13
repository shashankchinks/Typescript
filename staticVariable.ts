//static variable and method :-
{
    class Person{
        count: number = 0;
        getPersonCount(){
            return this.count;
        }

        constructor(){
            this.count++;
        }
    }

    class PersonNew{
        static count: number = 0;
        static getPersonCount(){
            return PersonNew.count;
        }

        constructor(){
            PersonNew.count++;
        }
    }

    let person1 = new Person();
    let person2 = new Person();
    let person3 = new PersonNew();
    console.log(person1.getPersonCount());
    console.log(person2.getPersonCount());
    console.log(PersonNew.getPersonCount());

    // to access the property and methods we need to use class name.
}
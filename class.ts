{
    // Class
    class Person {
        constructor(myname: string, myId: number) {
            this.name = myname;
            this.id = myId;
        }
        name: string;
        id: number;
        display(){
            console.log(`Person Id : ${this.id}, name : ${this.name}`);
        }
        
    }

    

    let person1 = new Person('John', 1);
    let person2 = new Person('Mayank', 2);
    person1.display();
    person2.display();
    console.log(person1.name);
    console.log(person1.id);
    console.log(person1.display);
    console.log(person1.display());

    //To call the class we need to create the obejct or instance of class
    //new :- keyword to create object of any class
    //constructor is required to initialise the variable defined in the class.Inside text written is known as data attribute.


    //===============================================================================================================================
    //Interface

    interface IPerson{
        name?: string;
        id: number;
        role: roles;
    }

    class newPerson {
        person_data: IPerson;
        constructor(temp_person: IPerson) {
            this.person_data = temp_person;
        }
        display(){
            console.log(`Person Id : ${this.person_data.id}, name : ${this.person_data.name}, role : ${roles[this.person_data.role]}`);
        }
        
    }

    enum roles{
        'engineer','doctor','lawyer'
    }

    

    let person3: IPerson = {
        name    :"Interface person",
        id      :112,
        role    :roles.engineer
    }

    let person4 = new newPerson(person3);
    console.log('Person interface calling newPerson class');
    person4.display();

    //=============================================================================================

    //Inheritance
    //Base class
    class shape{
        constructor(length: number, breadth: number){
            this.length = length;
            this.breadth = breadth;
        }
        area: number;
        length: number;
        breadth: number;
        Area(){
            console.log(this.area);
        }

        display(shape :string){
            console.log(`Area of ${shape} = ${this.area}`);
        }

    }

    //child class
    class square extends shape{
        constructor(length: number, breadth: number){
            super(length, breadth);
            this.area = 0;
        }
        Area(){
            this.area = this.length * this.breadth;
        }
    }



    //In above example we are implementing the inheritance and function overriding

    

    let square1 = new square(1,2);
    console.log('Square');
    console.log(square1.Area());
    console.log(square1.display('Square'));


    //Interface

}
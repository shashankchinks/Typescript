{
    let obj = {
        name : "ABC",
        display : function (msg: string){
            console.log(msg);
        }
    }

    obj.display('Hello');

    class Object {
        name: string;
        display(){
            console.log(this.name);
        }
    }

    let obj1 = new Object();
    obj1.name = "Hello";
    obj1.display();


    //Js object and JSON data object
    //It requires 

    //Access modifier
    //By default property and methods are public in typescript.
    //1.Public :- it is accesible outside of class using object and inside the class.
    //2.Protected :- It is not accessible outside class, It can get inherited but not accessible as object property or method 
    //3.Private :- It is accessible inside the class, cannot inherit also.
    class Employee{
        public fullname: string;
        public address: string;
        constructor(){
            this.fullname = "John Smith";
            this.address = "Bangalore"
        }
    }

    class Employee1{
        protected fullname: string;
        protected address: string;
        constructor(){
            this.fullname = "John Smith";
            this.address = "Bangalore"
        }
    }

    class Employee2{
        private fullname: string;
        private address: string;
        constructor(){
            this.fullname = "John Smith";
            this.address = "Bangalore"
        }
    }

    class company extends Employee{
        public display(){
            console.log(this.fullname);
        }
    }

    let objnew = new company();
    objnew.display();
    console.log(objnew.fullname);
    console.log(objnew.address);

    let obj2 = new Employee();
    obj2.fullname;

    //getter/setter typescript :-
    class Person{
        private _fullname: string;
        public _role: string;

        protected constructor(myname: string, myrole: string){
            this._fullname = myname;
            this._role = myrole;
        }

        //get value of fullname
        get fullname(){
            return this._fullname;
        }

        //set value of fullname
        set fullname(myname: string){
            if(myname != ''){
                this._fullname = myname;
            }
        }
    }

    class student extends Person{
        _role = "Doctor";
    }

    let person1 = new Person();
    let student1 = new student();

    person1.fullname = "ABCD";

    console.log(person1.fullname);
}
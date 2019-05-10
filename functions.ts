{
    class Employee{
        public empcode: number;
        public name: string;
        constructor(code: number, name: string){
            this.empcode = code;
            this.name = name;
        }
    }

    let emp1 = new Employee(100, "Anish");
    console.log(emp1.empcode);
    console.log(emp1.name);

    //Named function
    function display(){
        console.log('Hello Typescript');
    }

    display();

    //Anonymous function
    let greeting = function(){
        console.log('Greetings from Typescript');
    }

    greeting();

    //Function parameter
    function greet(greeting: string, name: string) : string{
        return greeting + ' ' + name + '!';
    }

    //Optional parameter
    function call(greeting1: string, name1?: string){
        let msg = greet(greeting1, name1);
        console.log(msg);
    }

    call('Hello', 'Deepak');
    call('Hello');

    //Default parameter
    function Greet(name :string, greeting: string = "Hello"):string{
        return greeting +' '+name+'!';
    }

    

    
}
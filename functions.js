{
    var Employee = /** @class */ (function () {
        function Employee(code, name) {
            this.empcode = code;
            this.name = name;
        }
        return Employee;
    }());
    var emp1 = new Employee(100, "Anish");
    console.log(emp1.empcode);
    console.log(emp1.name);
    //Named function
    function display() {
        console.log('Hello Typescript');
    }
    display();
    //Anonymous function
    var greeting = function () {
        console.log('Greetings from Typescript');
    };
    greeting();
    //Function parameter
    function greet(greeting, name) {
        return greeting + ' ' + name + '!';
    }
    function call(greeting1, name1) {
        var msg = greet(greeting1, name1);
        console.log(msg);
    }
    call('Hello', 'Deepak');
    call('Hello');
}

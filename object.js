var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var obj = {
        name: "ABC",
        display: function (msg) {
            console.log(msg);
        }
    };
    obj.display('Hello');
    var Object_1 = /** @class */ (function () {
        function Object() {
        }
        Object.prototype.display = function () {
            console.log(this.name);
        };
        return Object;
    }());
    var obj1 = new Object_1();
    obj1.name = "Hello";
    obj1.display();
    //Js object and JSON data object
    //It requires 
    //Access modifier
    //By default property and methods are public in typescript.
    //1.Public :- it is accesible outside of class using object and inside the class.
    //2.Protected :- It is not accessible outside class, It can get inherited but not accessible as object property or method 
    //3.Private :- It is accessible inside the class, cannot inherit also.
    var Employee = /** @class */ (function () {
        function Employee() {
            this.fullname = "John Smith";
            this.address = "Bangalore";
        }
        return Employee;
    }());
    var Employee1 = /** @class */ (function () {
        function Employee1() {
            this.fullname = "John Smith";
            this.address = "Bangalore";
        }
        return Employee1;
    }());
    var Employee2 = /** @class */ (function () {
        function Employee2() {
            this.fullname = "John Smith";
            this.address = "Bangalore";
        }
        return Employee2;
    }());
    var company = /** @class */ (function (_super) {
        __extends(company, _super);
        function company() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        company.prototype.display = function () {
            console.log(this.fullname);
        };
        return company;
    }(Employee));
    var objnew = new company();
    objnew.display();
    console.log(objnew.fullname);
    console.log(objnew.address);
    var obj2 = new Employee();
    obj2.fullname;
    //getter/setter typescript :-
    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "fullname", {
            //get value of fullname
            get: function () {
                return this._fullname;
            },
            //set value of fullname
            set: function (myname) {
                if (myname != '') {
                    this._fullname = myname;
                }
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var person1 = new Person();
    person1.fullname = "ABCD";
    console.log(person1.fullname);
}

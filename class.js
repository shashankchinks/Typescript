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
    var Person = /** @class */ (function () {
        function Person(myname, myId) {
            this.name = myname;
            this.id = myId;
        }
        Person.prototype.display = function () {
            console.log("Person Id : " + this.id + ", name : " + this.name);
        };
        return Person;
    }());
    var newPerson = /** @class */ (function () {
        function newPerson(temp_person) {
            this.person_data = temp_person;
        }
        newPerson.prototype.display = function () {
            console.log("Person Id : " + this.person_data.id + ", name : " + this.person_data.name + ", role : " + roles[this.person_data.role]);
        };
        return newPerson;
    }());
    var roles = void 0;
    (function (roles) {
        roles[roles["engineer"] = 0] = "engineer";
        roles[roles["doctor"] = 1] = "doctor";
        roles[roles["lawyer"] = 2] = "lawyer";
    })(roles || (roles = {}));
    var person1 = new Person('John', 1);
    var person2 = new Person('Mayank', 2);
    person1.display();
    person2.display();
    console.log(person1.name);
    console.log(person1.id);
    console.log(person1.display);
    console.log(person1.display());
    var person3 = {
        name: "Interface person",
        id: 112,
        role: roles.engineer
    };
    var person4 = new newPerson(person3);
    console.log('Person interface calling newPerson class');
    person4.display();
    //To call the class we need to create the obejct or instance of class
    //new :- keyword to create object of any class
    //constructor is required to initialise the variable defined in the class.Inside text written is known as data attribute.
    //Base class
    var shape = /** @class */ (function () {
        function shape(length, breadth) {
            this.length = length;
            this.breadth = breadth;
        }
        shape.prototype.Area = function () {
            console.log(this.area);
        };
        shape.prototype.display = function (shape) {
            console.log("Area of " + shape + " = " + this.area);
        };
        return shape;
    }());
    //child class
    var square = /** @class */ (function (_super) {
        __extends(square, _super);
        function square(length, breadth) {
            var _this = _super.call(this, length, breadth) || this;
            _this.area = 0;
            return _this;
        }
        square.prototype.Area = function () {
            this.area = this.length * this.breadth;
        };
        return square;
    }(shape));
    //In above example we are implementing the inheritance and function overriding
    var square1 = new square(1, 2);
    console.log('Square');
    console.log(square1.Area());
    console.log(square1.display('Square'));
    //Interface
}

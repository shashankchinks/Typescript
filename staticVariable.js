//static variable and method :-
{
    var Person = /** @class */ (function () {
        function Person() {
            this.count = 0;
            this.count++;
        }
        Person.prototype.getPersonCount = function () {
            return this.count;
        };
        return Person;
    }());
    var person1 = new Person();
    var person2 = new Person();
    console.log(person1.getPersonCount());
    console.log(person2.getPersonCount());
}

{
    var firstname = "Anish";
    var surname = "Kumar";
    var lastname = "ABCD";
    var fullname = firstname.concat(surname, lastname);
    console.log(fullname);
    //Template String
    var string_name = "John";
    var department = "finance";
    var statement = string_name + " works in " + department + " department."; //concate string
    var statement1 = string_name + " works in " + department + " department."; //Template string
    console.log(statement);
    console.log(statement1);
    // # Object(JS object) :- key value pair
    var person = {
        name: "Anish",
        rank: 200,
        mobile: 9742958513
    };
    console.log(person);
    console.log(person.rank);
    console.log(person["rank"]);
    // # JSON object :- key value pair
    var personJSON = {
        "name": "Anish",
        "rank": 200,
        "mobile": 9742958513
    };
    // # Num and undefined
    var amount = void 0;
    console.log(amount);
    var schoolName = null;
    console.log(schoolName);
    // # Array
    var array1 = ["Mango", "Banana", "Apple"];
    for (var i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }
    var j = 0;
    while (j < array1.length) {
        console.log(array1[j]);
        j++;
    }
    console.log(array1);
    // # Any
    var any_name = 100;
    any_name = "Shashank";
    any_name = false;
    console.log(any_name);
    // # Enum
    // # Types of for loop :- for of, for each, for in, for
    var list = [10, 20, 30, 40, 50];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        console.log(item); // It(for of) will return the array value
    }
    for (var index in list) {
        console.log(index); // It(for in) will return the array index
        console.log(list[index]);
    }
    list.forEach(function (val, index) {
        console.log(val);
        console.log(index);
    });
}

{
    let firstname: string = "Anish";
    let surname :string = "Kumar";
    let lastname: string = "ABCD";
    let fullname = firstname.concat(surname,lastname);
    console.log(fullname);


    //Template String

    let string_name :string = "John";
    let department :string = "finance";
    let statement :string = string_name + " works in "+department+" department."; //concate string

    let statement1: string = `${string_name} works in ${department} department.`; //Template string
    console.log(statement);
    console.log(statement1);

    // # Object(JS object) :- key value pair
    let person = {
        name : "Anish",
        rank : 200,
        mobile : 9742958513
    }

    console.log(person);
    console.log(person.rank);
    console.log(person["rank"]);

    // # JSON object :- key value pair
    let personJSON = {
        "name" : "Anish",
        "rank" : 200,
        "mobile" : 9742958513
    }

    // # Num and undefined
    let amount :number;
    console.log(amount);

    let schoolName :string = null;
    console.log(schoolName);

    // # Array
    let array1 = ["Mango", "Banana", "Apple"];
    for(let i = 0; i< array1.length; i++){
        console.log(array1[i]);
    }
    let j = 0;
    while(j < array1.length){
        console.log(array1[j]);
        j++;
    }
    console.log(array1);

    // # Any

    let any_name :any = 100;
    any_name = "Shashank";
    any_name = false;
    console.log(any_name);

    // # Enum

    // # Types of for loop :- for of, for each, for in, for
    let list :number[] = [10,20,30,40,50];

    for(let item of list){
        console.log(item); // It(for of) will return the array value
    }

    for(let index in list){
        console.log(index); // It(for in) will return the array index
        console.log(list[index]);
    }

    list.forEach(function(val,index){
        console.log(val);
        console.log(index);
    });






}
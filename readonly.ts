{
    class Person{
        readonly name: string = "ABCD";
        display(){
            console.log(this.name);
        }

    }

    var p1 = new Person();
    p1.display();
    p1.name;

    var p2 = new Person();

}
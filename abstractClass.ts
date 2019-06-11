{
    abstract class Department {
        name: string;
        details(){
            console.log("Hello");
        }
        abstract department_structure();
    }

    class company extends Department{
        department_structure(){
            
        }
    }

    let company1 = new company();
    console.log(company1.details);
}
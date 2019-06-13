{
    let operation: string =  'Multiple';
    let x: number = 5;
    let y: number = 10;
    switch (operation) {
        case 'Addition':
            console.log(x+y);
            break;
        
        case 'Substraction':
            console.log(x-y);
            break;

        case 'Multiple':
            console.log(x*y);
            break;

        case 'Division':
            console.log(x/y);
            break;
    
        default:
            console.log('No such operation available');
            break;
    }

    enum Operator{
        addition = 100,
        substraction = 200,
        multiple = 300,
        division = 400
    }

    function calculator(method:Operator){
        switch (method) {
            case Operator.addition:
                
                break;

            case Operator.substraction:
                break;

            case Operator.multiple:
                break;

            case Operator.division:
                break;
        
            default:
                break;
        }
    }

    calculator(Operator.addition);

    
}


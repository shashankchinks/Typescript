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

    
}


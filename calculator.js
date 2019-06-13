{
    var operation = 'Multiple';
    var x = 5;
    var y = 10;
    switch (operation) {
        case 'Addition':
            console.log(x + y);
            break;
        case 'Substraction':
            console.log(x - y);
            break;
        case 'Multiple':
            console.log(x * y);
            break;
        case 'Division':
            console.log(x / y);
            break;
        default:
            console.log('No such operation available');
            break;
    }
}

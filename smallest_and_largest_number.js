{
    var list = [10, 20, 5, 15, 30, 1];
    var smallest = null;
    var largest = null;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (list[i] > list[j]) {
                largest = list[i];
            }
            if (list[i] < list[j]) {
                smallest = list[i];
            }
        }
    }
    var min = 0;
    var max = 0;
    min = max = list[0];
    for (var k = 1; k < list.length; k++) {
        if (min > list[k]) {
            min = list[k];
        }
        if (max < list[k]) {
            max = list[k];
        }
    }
    console.log(smallest);
    console.log(largest);
    console.log(min);
    console.log(max);
}

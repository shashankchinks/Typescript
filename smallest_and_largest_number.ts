{
    let list :number[] = [10,20,5,15,30,1];
    let smallest :number = null; 
    let largest :number = null;
    for(let i:number = 0; i<list.length; i++){
        for(let j: number = 0; j< list.length; j++){
            if(list[i] > list[j]){
                largest = list[i];
            }
            if(list[i] < list[j]){
                smallest = list[i];
            }
        }
    }
    let min :number = 0;
    let max :number = 0;
    min = max = list[0];
    for(let k: number = 1; k < list.length; k++){
        if(min > list[k]){
            min = list[k];
        }
        if(max < list[k]){
            max = list[k];
        }
    }

    console.log(smallest);
    console.log(largest);
    console.log(min);
    console.log(max);
}
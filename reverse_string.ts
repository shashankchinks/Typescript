{
    let stringArray :string = "newstein";
    let reverseString :string = "";
  
    // for(let i :number = stringArray.length - 1; i >= 0; i--){
    //     reverseString.push(stringArray[i]);
    // }

    for(let i = stringArray.length - 1; i >= 0; i--){
        reverseString += stringArray[i];
        // reverseString1 += stringArray[stringArray.length/2 - j];
    }

    console.log(reverseString);

    // let k :number = 0;
    // let l :number = stringArray.length; 
    // while(k <= l){
    //     swap(stringArray[k],stringArray[l]);
    //     k++;
    //     l--;    
    // }

    // function swap(a: any,b : any){
    //     let temp = a;
    //     b = a;
    //     a = temp;
    //     reverseString.concat(temp);
    // }
    // console.log(reverseString);
}
const myLetterArray = ["M", "M", "M", "M", "F" , "F" , "F" , "F", "L" ];
const mySecondLetterArray = ["K", "K", "K", "K"];
const myNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

mySecondLetterArray.forEach(function(currentValue){
    myLetterArray.push(currentValue)
});    
    console.log("Hela listan: " + myLetterArray);

//Man pushar inte in en array i en array, utan snarare enskilda poster. Därför bör man loopa käll-arrayen och göra en push-funktion till mål-arrayen. På så vis pushas varje enkilld post in i mål-arrayen.

// ==== Filter ==== // Filtrera ut önskat innehåll och returnerar ALLA.
const result = myLetterArray.filter(function(letter){
    return letter == "F"
});
    console.log("Filter result (F): " + result);

// ==== Map ==== // Mappa om (förändra) innehållet i arrayen.
const mapResult = myNumberArray.map(function(number){
    return number * 2;
});
    console.log("Map result: " + mapResult);

// ==== Some ==== // Finns den efterfrågade posten? Returnerar true/false.
const oneMLetter = myLetterArray.some(function(letter){
    return letter === "M"
});
    console.log("Finns det något M i arrayen?: " + oneMLetter);

// ==== Sort ==== // Sorterar en array i nummerordning. Antingen ökande eller minskande värden.
const sortedArray = myNumberArray.sort((a, b) => {
    return b - a;
});
    console.log("Sorterad array med nummer: " + sortedArray);

// ==== Reduce ==== // Summan av värden i en array. Accumulated & Current. 
const myReduce = myNumberArray.reduce((acc, cur) => {
    return acc + cur;
},0);
    console.log(myReduce);

 // ==== Every ==== // Kollar om ALLA element passar ett specifikt sökvärde. Returnerar true/false.
 const myEvery = mySecondLetterArray.every((letter) => letter === "K" );
    console.log("myEvery: " + myEvery);
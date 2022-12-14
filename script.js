//This is a collection of arrayFaunctions in JavaScript. All comments in the code are in Swedish. 

const myLetterArray = ["M", "M", "F" , "F", "L"];
const mySecondLetterArray = ["K", "K"];
const myNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// ===== JOINING MULTIPLE ARRAYS INTO ONE ===== //

// ==== .push ==== //
mySecondLetterArray.forEach(function(currentValue){
    myLetterArray.push(currentValue)
});    
    console.log("Loop-pushad lista: " + myLetterArray)
    
    //Man pushar inte in en array i en array, utan snarare enskilda poster. Därför bör man loopa käll-arrayen och göra en push-funktion till mål-arrayen. På så vis pushas varje enkilld post in i mål-arrayen.

// ==== .concat ==== //
const myConcatResult = myLetterArray.concat(mySecondLetterArray);
    console.log("Detta är en concatArray: " + myConcatResult);

// ==== Spread ==== //
const mySpreadArray = [...myLetterArray, ...mySecondLetterArray];
console.log("Detta är en spreadArray: " + mySpreadArray)


// ===== SORTING AND FILTERING OF ARRAYS ===== //

// ==== Filter ==== // Filtrera ut önskat innehåll och returnerar ALLA.
const result = myLetterArray.filter((letter) => letter == "F"); //Förkortad function med =>. 
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
const sortedArray = myNumberArray.sort((a, b) => b - a);
    console.log("Sorterad array med nummer: " + sortedArray);

// ==== Reduce ==== // Summan av värden i en array. Accumulated & Current. 
const myReduce = myNumberArray.reduce((acc, cur) => {
    return acc + cur;
},0);
    console.log("Summan av alla numeriska värden i arrayen: " + myReduce);

 // ==== Every ==== // Kollar om ALLA element passar ett specifikt sökvärde. Returnerar true/false.
 const myEvery = mySecondLetterArray.every((letter) => letter === "K" );
    console.log("myEvery: " + myEvery);
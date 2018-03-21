var j = 0;
var newNumberArray = [];

function positiveNumbers(numberArray){
    var numberArrayLen = numberArray.length;
    for (var i = 0; i <= numberArrayLen; i++) {
       if (numberArray[i] >= 0) {
           newNumberArray[j] = numberArray[i];
           j++;
       };
    };
    document.getElementById("positive_numbers").innerHTML = newNumberArray
    
};

positiveNumbers([1, -3, 5, -3, 0])

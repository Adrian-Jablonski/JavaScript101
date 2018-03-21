var startNumber;
var endNumber;

function printNumbs(startNumber, endNumber){
    for (var i = startNumber; i <= endNumber; i++) {
        document.write(i);
        document.write("<br>")
    }
};

printNumbs(1, 9);

function printNumbs2(startNumber, endNumber) {
    while (startNumber <= endNumber) {
        document.write(startNumber);
        document.write("<br>")
        startNumber ++;
    }
}

printNumbs2(18, 25)
var normalText;
var ceasarCipherCode = [];
var ceasarCipherText = [];
var textLength;
var offset;

$("#submit").on("click", function() {
    $("#ceasar_cipher").text("")
    offset = Number(document.getElementById("offset").value);
    normalText = (document.getElementById("normal_text").value).toLowerCase();
    textLength = normalText.length;
    ceasarCipherText = [];
    
    for (var i = 0; i < textLength; i++) {
        if (normalText.charCodeAt(i) === 32) {
            ceasarCipherCode[i] = normalText.charCodeAt(i);
        }
        else {
            ceasarCipherCode[i] = normalText.charCodeAt(i) + offset;
            if (ceasarCipherCode[i] < 97) {
                ceasarCipherCode[i] = 123 - (97 - ceasarCipherCode[i]);
            }
            else if (ceasarCipherCode[i] > 122) {
                ceasarCipherCode[i] = 97 + (ceasarCipherCode[i] - 123);
            }   
        }
    }
    $("#ceasar_cipher").text(ceasarCipherCode);
    
    for (var i = 0; i < textLength; i++) {
        ceasarCipherText[i] = String.fromCharCode(ceasarCipherCode[i]);
    }
    
    ceasarCipherText = ceasarCipherText.join("");
    
    $("#ceasar_cipher_code").text(ceasarCipherText);
    
});
    



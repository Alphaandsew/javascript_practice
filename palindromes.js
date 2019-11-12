const palindromes = function(s) {
    punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    letterArray = s.replace(punctuationRegex,"").toLowerCase().split("");
    let i = 0;
    let j = letterArray.length-1;
    while (i < j){
        if (letterArray[i++] != letterArray[j--]) return false;
    }
    return true
}



console.log(palindromes('Animal loots foliated detail of stool lamina.'));
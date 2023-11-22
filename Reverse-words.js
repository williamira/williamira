// diff
const reverseWords = function(str) {  
    let arrSplit = str.split(" ");
    let strReversed = "";
            for (let i = arrSplit.length - 1; i >= 0; i--) {
                strReversed += arrSplit[i] + " ";
            }
    return strReversed;
  };
  
  console.log(
    reverseWords('hello and welcome to Lighthouse Labs'),
    reverseWords('am I Yoda')
  );
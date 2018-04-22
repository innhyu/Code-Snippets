// Overall, easy coding but the 
// specifications were pretty weird.
// You were supposed to read the digits and count them.

function LookSaySequence(num) {
    var strnum = String(num);
    var keep = "";
    var result = "";
    var i = 0;
    while(i < strnum.length){
        var count = search(strnum[i], strnum.slice(i));
        result += String(count) + strnum[i];
        i += count;
    }
  // code goes here  
  return Number(result);
         
}

function search(char, str){
    var i = 0;
    while(i < str.length && str[i] === char){
        i++;
    }
    return i;
}
   
// keep this function call here 
LookSaySequence(readline());
// Brute Force;
//
// Takes in some string consisting of "a", "b", "c"
// Where the reduction rule is 
// "ab" / "ba" -> c
// "bc" / "cb" -> a
// "ac" / "ca" -> b
// Then finds the length of the shortest possible.

// This has to take into account the order of the reduction changes
// the result significantly, and uses recursion to approach the problem.
// Divide and conquer.

function StringReduction(str) { 
    var first;
    var second;
    var third;
    var shortest = str.length;
    
    for(var i = 0; i < str.length; i++){
        first = str.slice(0,i);
        second = str.slice(i, i+2);
        third = str.slice(i+2, str.length);
        var newstr = helper(first, second, third);
        if(!(newstr.length === str.length)){
            var candidate = StringReduction(newstr);
            if(candidate < shortest){
                shortest = candidate; 
            };
        }
    
    }

  return shortest;
  
}

function helper(front, mid, end){
    var result = mid;
    if(mid === "ac" || mid =="ca"){
        result = "b";
    }
    else if(mid === "ab" || mid === "ba"){
        result = "c";
    }
    else if(mid === "cb" || mid === "bc"){
        result = "a";
    }
    return front + result + end;
}
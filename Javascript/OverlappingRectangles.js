// One of the worst functiosn I had to write, because
// The syntax and the instructions were just terrible.
// It was going to give a string, inside an array.
// Not separated, but just a single string inside an array.
// However, the examples were not arrays, but mere strings.
// Very confusingly was getting the answers wrong the entire time.

// Problems: Not checking edge cases, such as when the two 
// points are on top of each other in the overlap function.
// I did e1F < e2F something like this, but it really should be 
// e1F <= e2F. 

// Also, the problem with Math.round because it was asking for 
// "How many rectangles can fit in the bigger one". This is clearly
// asking for the floor, not the round. Math.abs and Math.floor. 

// Learned: Just basic things, codes are getting much longer.
// One thing to note is that I used regex here. Regex is just
// so much easier if you're using it to do anything related to
// string interpolation. I haven't used it much, but I really should.

Also, I was doing Math.round instead of Math.floor. 
function OverlappingRectangles(strArr) { 
    var count = 0;
    var newstrArr = strArr[0].replace(/\),\(/g,")+(");
    var newArr = newstrArr.split('+');
    var rec1 = [];
    var rec2 = [];
    newArr.forEach(function(e){
       if(count >= 4){
           rec2.push(e);
       } 
       else{
           rec1.push(e);
       }
       count++;
    })
    
    var xF1 = findMin(rec1, 0);
    var xL1 = findMax(rec1, 0);
    var yF1 = findMin(rec1, 1);
    var yL1 = findMax(rec1, 1);
    
    var xF2 = findMin(rec2, 0);
    var xL2 = findMax(rec2, 0);
    var yF2 = findMin(rec2, 1);
    var yL2 = findMax(rec2, 1);
    
    var area1 = (xL1 - xF1) * (yL1 - yF1);
    
    var xover = overlap(xF1, xL1, xF2, xL2);
    var yover = overlap(yF1, yL1, yF2, yL2);
    var overarea = xover * yover;

    if(overarea === 0){
        return 0;
    }
    else{
        return Math.floor(area1 / overarea);
    }
}

function overlap(e1F, e1L, e2F, e2L){
    if(e1F <= e2F){
        if(e1L > e2F){
            return e1L - e2F;
        }
    }    
    else{
        if(e2L > e1F){
            return e2L - e1F;
        }
    }
    return 0;
}

function findMax(strArr, index){
    var max;
    for(var i = 0; i < strArr.length; i++){
        var readable = paren(strArr[i]);
        var samp = readable[index];
        if(max === undefined){
            max = samp; 
        }
        else if(samp > max){
            max = samp;
        }
    }
    return max;
}

function findMin(strArr, index){
    var min;
    for(var i = 0; i < strArr.length; i++){
        var readable = paren(strArr[i]);
        var samp = readable[index];
        if(min === undefined){
            min = samp; 
        }
        else if(samp < min){
            min = samp;
        }
    }
    return min;
}

function paren(str){
    var newstr = str.split(",");
    var first = newstr[0].slice(1, newstr[0].length);
    var second = newstr[1].slice(0, newstr[1].length -1);
    var arr = [Number(first), Number(second)];
    return arr;
}
   
// keep this function call here 
OverlappingRectangles(readline());
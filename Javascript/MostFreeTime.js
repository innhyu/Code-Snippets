// Fun function work with.
// Given some time of schedules, finds out the 
// free time between the given times and outputs the
// maximum free time one has.

Notes: Anything with checking time seems to be best done by
converting them into seconds. That just gives so much more flexibility
when it comes to comparisons and what not. Also, I realized that 
you can call a sort with a custom function inside.. I think it was called
the higher order function. 

function MostFreeTime(strArr) { 
    var newArr = [];
    strArr.forEach(function(e){
        var militarized = military(e);
        newArr.push(militarized);
    })
    newArr.sort(function(x,y){
        return x[0] > y[0]
    })
    
    var maxfree = 0;
    for(var i = 0; i < newArr.length - 1; i++){
        var iLast = newArr[i][1];
        var i1First = newArr[i+1][0];
        var free = i1First- iLast;
        if(free > maxfree){
            maxfree = free;
        }
    }
    
    var hours = Math.floor(maxfree / 60);
    if(hours < 10){
        hours = String("0") + String(hours); 
    }
    else{
        hours = String(hours);
    }
    var mins = String(maxfree % 60);
    if(mins < 10){
        mins = String("0") + String(mins);
    }
    else{
        mins = String(mins);
    }
    var maxfreeStr = hours + ":" + mins;

  // code goes here  
  return maxfreeStr; 
         
}
   
function military(str){
    var times = str.split('-');
    var militarytime = [];
    times.forEach(function(elem){
        var numTime = elem.slice(0,5);
        var pmam = elem.slice(5,elem.length);
        var hourmin = numTime.split(":")
        var newhour = Number(hourmin[0]);
        if(pmam === "PM"){
            newhour = (newhour % 12) + 12; 
        }
        var newtime = newhour * 60 + Number(hourmin[1]);
        militarytime.push(newtime);
    })
    return militarytime;
}


// keep this function call here 
MostFreeTime(readline());
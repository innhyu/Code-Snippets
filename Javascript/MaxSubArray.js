// One of the classics. 
// This really should just have O(n), which is what I learned
// in a Parallel and Sequential Algorithms and Data Structures class.

// I'm glad I remember it (It uses the essential idea of Scan).

function MaxSubarray(arr) { 
    var added = 0;
    for(var i = 0; i < arr.length - 1; i++){
        var next = arr[i + 1]
        if(next > arr[i] && arr[i] <= 0){
            // Nothing   
        }
        else{
            arr[i + 1] = arr[i + 1] + arr[i];
        }
    }
    return Math.max.apply(null, arr);
}
   
// keep this function call here 
MaxSubarray(readline());
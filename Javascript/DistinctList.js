// Pretty easy if you
// utilize the set.

// Set literalyl gets rid of the
// duplicate elements. We want to find the number
// of these duplicate elements.

// Then, it means that if we subtract the 
// size of the set from the array length,
// we get the number of duplicate elements.

// Problem: NONE

// Learned:
// The syntax of JS set.
// It's basically " new Set([])".

// Also, it has the function ".has".

function DistinctList(arr) { 
    var newset = new Set(arr);
    return arr.length - newset.size; 
}
   
// keep this function call here 
DistinctList(readline());
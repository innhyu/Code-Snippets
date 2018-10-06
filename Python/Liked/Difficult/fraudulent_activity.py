"""
From HackerRank's "Fraudulent Acitivity Notifications"
in Practive > Interview Preparation Kit > Sorting

The case is simple. Given some array of length n, 
there are windows of length d. 

Check if the element after the window of length d is
greater or equal to twice the median of the window.

I initially just took individual windows, sorted in and then
checked the median and proceeded on.

However, assuming O(nlogn) for each sort, this  was pretty bad..
I think the worst case would be O(n^2 * logn) and wow that's horrible.

So the 'hint' was to use CountingSort. Never heard of it, so I went to study that.
It's a really good one. 

It basically sets up an array that spans the range of numbers, and stores the offsets
of the numbers (based on the idea if sorted). 

I used that, and for each new window, just did + and - of new and old elements, which made
after the initial sorting O(1) comparison.

Now this was good. At most, I was doing O(d) operation per loop, so at most O(n * d) and
for the initial sorting, O(n). So now we have O(n + n*d), which is MUCH faster than the original.
Was a very tricky one, but I really enjoyed it.

"""  





#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the activityNotifications function below.
def activityNotifications(expenditure, d):
    countArray = [0 for i in range(201)]
    isEven = (d % 2) == 0
    midLen = d // 2
    smallMidLen = midLen - 1
    notifications = 0
    
    sliced = expenditure[0 : d]
    newCountArray = countingSort(sliced, countArray)
    
    for i in range(len(expenditure) - d):
        
        if isEven:
#             Have to check - 1
            smallMed = findAppropriate(newCountArray, midLen)
            bigMed = findAppropriate(newCountArray, midLen + 1)
            median = (smallMed + bigMed) / 2
        else:
#             midLen is right on spot
            median = findAppropriate(newCountArray, midLen + 1)
        
        if expenditure[i + d] >= median * 2:
            notifications += 1

        if i + d < len(expenditure):
            newCountArray = editCS(newCountArray, expenditure[i], expenditure[i + d]) 
            
    return notifications

def countingSort(given, countArray):
    for number in given:
        countArray[number] += 1
    return countArray

def editCS(cs, old, new):
    cs[old] -= 1
    cs[new] += 1
    return cs

def findAppropriate(given, desired):
    summed = 0
    for i in range(len(given)):
        summed += given[i]
        if summed >= desired:
            return i
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nd = input().split()

    n = int(nd[0])

    d = int(nd[1])

    expenditure = list(map(int, input().rstrip().split()))

    result = activityNotifications(expenditure, d)

    fptr.write(str(result) + '\n')

    fptr.close()

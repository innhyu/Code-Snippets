def RunLength(string): 
	newstr = ""
	counter = 1
	for i in range(len(string)-1):
		curr = string[i]
		next = string[i+1]
		if curr == next:
			counter = counter + 1
		else:
			newstr = newstr + str(counter) + counter * curr
			counter = 1
	newstr = newstr + str(counter) + counter * string[len(string)-1]
	# code goes here 
	return newstr

# keep this function call here  
print RunLength("wwwgghilkkkkk")

















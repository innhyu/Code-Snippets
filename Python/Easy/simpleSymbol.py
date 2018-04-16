def SimpleSymbols(str): 
state = 0
for char in str:
    print char
	if char == "+":
		if state == 2:
			state = 0
		else:
			state = 1
	elif char =="=":
    		state = state
	else:
		if state == 1:
			state = 2
		else:
			return False
	print "State is"
	print state
return True

# keep this function call here  
print SimpleSymbols(raw_input())  

















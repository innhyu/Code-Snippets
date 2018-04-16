import string

def PalindromeTwo(inputStr): 

	valids = string.ascii_letters + string.digits
	cleanString = ""
	for char in inputStr:
		if char in valids:
			cleanString = cleanString + char.lower()

	goLen = len(cleanString) / 2

	for i in range(goLen):
		if not(cleanString[i] == cleanString[-(i+1)]):
			return "false"

	return "true"

# keep this function call here  
print PalindromeTwo(raw_input())
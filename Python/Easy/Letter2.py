def LetterChanges(str): 
    alphabet = list("abcdefghijklmnopqrstuvwxyz")
    vowel = list("aeiou")
    newstring = ""
    for char in str:
        if char.lower() in alphabet: 
            index = alphabet.index(char.lower())
            newindex = index + 1 if index < 25 else 0
            newalphabet = alphabet[newindex]
            newalphabet = newalphabet.upper() if newalphabet in vowel else newalphabet
            newstring = newstring + newalphabet
        else:
            newstring = newstring + char
    return newstring
    
# keep this function call here  
print LetterChanges("hello world")
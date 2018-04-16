def LetterCapitalize(str):
    sep = str.split()
    for index,word in enumerate(sep):
        letters = list(word)
        letters[0] = letters[0].upper()
        sep[index] = ''.join(letters)
    sep = " ".join(sep)
    return sep
    
# keep this function call here  
print LetterCapitalize(raw_input())
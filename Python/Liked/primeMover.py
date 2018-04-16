def isPrime(x):
    modnum = x - 1
    while modnum > 1:
        if x % modnum == 0:
            return False
        modnum = modnum - 1
    return True

def PrimeMover(num): 
    primeKeep = 1
    while num >= 0:
        if isPrime(primeKeep):
            num = num - 1
        primeKeep = primeKeep + 1
    return primeKeep - 1
    
# keep this function call here  
print PrimeMover(16)
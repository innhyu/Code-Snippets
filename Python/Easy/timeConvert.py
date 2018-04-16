def TimeConvert(num): 
    hours = num // 60
    minutes = num - 60 * hours
    
    return str(hours) + ":" + str(minutes)
    
# keep this function call here  
print TimeConvert(raw_input())
# def hello():
#     '''This function prints Hello World string when called.'''
#     print('Hello World')
# print('Output obtained after calling the hello() function first time')
# hello()

# print('Output obtained after calling the hello() function second time')
# hello()

def polarity(num):
    if num >= 0:
        return 'It is positive'
    else:
        return 'It is negative'    

print(polarity(10))
print(polarity(-10))
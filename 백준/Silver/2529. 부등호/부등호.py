n = int(input())
relations = list(input().split())

maxNum = float('-inf')
minNum = float('inf')
maxAnswer = ''
minAnswer = ''

def dfs(arr:list):
  global maxNum
  global minNum
  global maxAnswer
  global minAnswer

  if len(arr) == n+1:
    global isValid

    val = ''.join(list(map(str, arr)))
    isValid = True

    for i in range(len(relations)):
      if relations[i] == "<" and arr[i] > arr[i+1]:
        isValid = False
        break

      if relations[i] == '>' and arr[i] < arr[i+1]:
        isValid = False
        break
    
    if(isValid and int(val) > maxNum):
      maxNum = int(val)
      maxAnswer = val
    
    if(isValid and int(val) < minNum):
      minNum = int(val)
      minAnswer = val
    
    return
  
  for i in range(10):
    if i in arr:
      continue

    arr.append(i)
    dfs(arr)
    arr.pop()

dfs([])  

print(maxAnswer)
print(minAnswer)
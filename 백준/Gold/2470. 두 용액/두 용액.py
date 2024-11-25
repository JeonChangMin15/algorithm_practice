n = int(input())
arr = list(map(int, input().split()))
arr.sort()

lt = 0
rt = len(arr)-1
absRes = float('inf')

answerLt = 0
answerRt = 0

while lt <= rt:
  if lt == rt:
    break
  
  valLt = arr[lt]
  valRt = arr[rt]
  valSum = abs(valLt + valRt)

  if valSum < absRes:
    answerLt = valLt
    answerRt = valRt
    absRes = valSum
  
  if abs(valLt) > abs(valRt):
    lt += 1
  else:
    rt -= 1

print(answerLt, answerRt)
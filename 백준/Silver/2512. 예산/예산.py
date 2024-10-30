cityN = int(input())
arr = list(map(int, input().split()))
totalMoney = int(input())

start = 1
end = max(arr)
answer = 1

while start <= end:
  curMoney = (start+end) // 2
  needTotal = 0

  for val in arr:
    if val < curMoney:
      needTotal += val
    else:
      needTotal += curMoney
  
  if needTotal <= totalMoney:
    answer = max(answer, curMoney)
    start = curMoney + 1
  else:
    end = curMoney - 1

print(answer)
n, outCnt = list(map(int, input().split()))
arr = []

for i in range(n):
  arr.append(int(input()))

left = max(arr)
right = sum(arr)
answer = float('inf')

while left <= right:
  mid = (left + right) // 2
  res = mid
  curCnt = 1

  for cost in arr:
    if res >= cost:
      res -= cost
    else:
      res = mid
      res -= cost
      curCnt += 1

  if curCnt <= outCnt:
    answer = min(answer, mid)
    right = mid - 1
  else:
    left = mid + 1

print(answer)
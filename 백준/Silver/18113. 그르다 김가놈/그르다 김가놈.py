foodN, cuttingLen, targetN = list(map(int, input().split()))
arr = []

for i in range(foodN):
  arr.append(int(input()))

left = 1
right = max(arr)
answer = -1

while left <= right:
  cnt = 0
  mid = (left + right) // 2
  for x in arr:
    if x >= 2*cuttingLen:
      cnt += (x-2*cuttingLen) // mid
    elif cuttingLen<x<2*cuttingLen:
      cnt += (x-cuttingLen) // mid

  if cnt >= targetN:
    answer = max(answer, mid)
    left = mid + 1
  else:
    right = mid - 1

print(answer)
peopleN, targetN = list(map(int, input().split()))
arr = list(map(int, input().split()))

left = 1
right = min(arr)*targetN
answer = float('inf')

while left <= right:
  mid = (left + right)//2
  cnt = 0

  for time in arr:
    cnt += mid // time
  
  if cnt >= targetN:
    answer = min(answer, mid)
    right = mid -1
  else:
    left = mid + 1

print(answer)
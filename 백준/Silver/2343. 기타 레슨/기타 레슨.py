lectureN, cdN = list(map(int, input().split()))
arr = list(map(int, input().split()))

left = max(arr)
right = sum(arr)
answer = float('inf')

while left <= right:
  mid = (left + right) // 2
  cnt = 1
  res = mid

  for time in arr:
    if res >= time:
      res -= time
    else:
      res = mid
      res -= time
      cnt += 1

  if cnt <= cdN:
    answer = min(answer, mid)
    right = mid - 1
  else:
    left = mid + 1

print(answer)
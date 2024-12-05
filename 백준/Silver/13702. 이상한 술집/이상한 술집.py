drinkN, personN = list(map(int, input().split()))
arr = []

for i in range(drinkN):
  arr.append(int(input()))

answer = 0

left = 1
right = max(arr)

while left <= right:
  mid = (left + right) // 2

  cnt = 0

  for size in arr:
    cnt += size // mid

  if cnt >= personN:
    answer = max(answer, mid)
    left = mid + 1
  else:
    right = mid - 1

print(answer)
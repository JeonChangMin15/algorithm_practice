peopleN, snakN = list(map(int, input().split()))
arr = list(map(int, input().split()))

left = 1
right = max(arr)
answer = 0

while left <= right:
  mid = (left + right) //2
  possible = 0

  for val in arr:
    possible += val // mid

  if possible >= peopleN:
    answer = max(answer, mid)
    left = mid + 1
  else:
    right = mid - 1

print(answer)
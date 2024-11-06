n, peopleN = list(map(int, input().split()))
arr = []

for i in range(n):
  arr.append(int(input()))


left = min(arr)
right = max(arr)*peopleN
answer = float('inf')

while left <= right:
  mid = (left + right) // 2
  curPeopleN = 0
  for t in arr:
    curPeopleN += mid // t

  if curPeopleN >= peopleN:
    answer = min(answer, mid)
    right = mid - 1
  else:
    left = mid + 1

print(answer)
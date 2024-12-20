n, chickN = list(map(int, input().split()))
arr = []

for i in range(n):
  arr.append(int(input()))

left = 1
right = max(arr)
answer = 1

while left <= right:
  mid = (left + right) // 2
  val = 0
  for x in arr:
    val += x // mid

  if val >= chickN:
    answer = max(answer, mid)
    left = mid + 1
  else:
    right = mid -1 

totalRes = sum(arr) - answer*chickN

print(totalRes)
n, caseN = list(map(int, input().split()))
arr = []


caseNums = []

for i in range(n):
  nameStr, maxN = input().split()
  arr.append([nameStr, int(maxN)])

for i in range(caseN):
  caseNums.append(int(input()))

answer = []

for num in caseNums:
  start = 0
  end = n - 1
  target = 0

  while start <= end:
    mid = (start + end) // 2
    val = arr[mid][1]

    if num > val:
      start = mid + 1

    if num <= val:
      end = mid - 1
      target = mid
      
  answer.append(arr[target][0])

print("\n".join(answer))

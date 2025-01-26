n, caseN = list(map(int, input().split()))
arr = []
test = []

for i in range(n):
  s,v = input().split()
  arr.append([s, int(v)])

for i in range(caseN):
  test.append(int(input()))

answer = []

for val in test:
  lt = 0
  rt = n -1
  index = float("inf")

  while lt <= rt:
    mid = (lt + rt) //2

    if arr[mid][1] >= val:
      rt = mid - 1
      index = min(index, mid)
    else:
      lt = mid + 1

  answer.append(arr[index][0])

print("\n".join(answer))
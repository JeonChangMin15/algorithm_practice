n, combN = list(map(int, input().split()))

answer = []

def backTrack(arr, lastNum):
  if len(arr) == combN:
    answer.append(" ".join(list(map(str, arr))))
    return

  for i in range(1, n+1):
    if i < lastNum:
      continue
    arr.append(i)
    backTrack(arr, i)
    arr.pop()

backTrack([], 0)

print("\n".join(answer))
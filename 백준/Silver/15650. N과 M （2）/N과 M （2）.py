n, combN = list(map(int,input().split()))

answer = []

def backtrack(arr, start):
  if len(arr) == combN:
    answer.append(" ".join(list(map(str, arr))))
    return

  for i in range(start, n+1):
    arr.append(i)
    backtrack(arr, i + 1)
    arr.pop()

backtrack([], 1)

print("\n".join(answer))
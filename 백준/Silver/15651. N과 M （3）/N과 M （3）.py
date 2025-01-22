n, maxLen = list(map(int, input().split()))

answer = []

def dfs(arr):
  if len(arr) == maxLen:
    answer.append(" ".join(list(map(str, arr))))
    return

  for i in range(1, n+1):
    arr.append(i)
    dfs(arr)
    arr.pop()

dfs([])

print("\n".join(answer))
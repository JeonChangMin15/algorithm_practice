n, sizeN = list(map(int, input().split()))

def dfs(arr):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for i in range(1, n+1):
    if i in arr:
      continue
    arr.append(i)
    dfs(arr)
    arr.pop()

dfs([])
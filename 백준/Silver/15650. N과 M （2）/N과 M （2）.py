n, sizeN = list(map(int, input().split()))

def dfs(arr, start):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for i in range(start, n+1):
    if i in arr:
      continue
    arr.append(i)
    dfs(arr, i+1)
    arr.pop()

dfs([], 1)
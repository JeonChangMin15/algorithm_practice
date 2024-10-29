n, sizeN = list(map(int, input().split()))

def dfs(arr):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for i in range(1, n+1):
    minNum = arr[-1] if len(arr) > 0 else 0
    if i >= minNum:
      arr.append(i)
      dfs(arr)
      arr.pop()

dfs([])
n =int(input())

def dfs(arr):
  if len(arr) == n:
    nums = " ".join(list(map(str, arr)))
    print(nums)
    return
  
  for i in range(1, n+1):
    if i in arr:
      continue
    arr.append(i)
    dfs(arr)
    arr.pop()

dfs([])

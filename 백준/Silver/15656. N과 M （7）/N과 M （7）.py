n, combN = list(map(int, input().split()))
nums = list(map(int, input().split()))
nums.sort()

def dfs(arr):
  if len(arr) == combN:
    print(" ".join(list(map(str, arr))))
    return

  for val in nums:
    arr.append(val)
    dfs(arr)
    arr.pop()

dfs([])
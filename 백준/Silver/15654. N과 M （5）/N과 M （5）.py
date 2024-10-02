n, sizeN = list(map(int, input().split()))
nums = list(map(int, input().split()))
nums.sort()

def dfs(arr):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for num in nums: 
    if num in arr:
      continue
    arr.append(num)
    dfs(arr)
    arr.pop()

dfs([])
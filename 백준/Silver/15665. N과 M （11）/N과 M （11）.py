n, sizeN = list(map(int, input().split()))
nums = list(set(map(int, input().split())))
nums.sort()

combArr = []

def dfs(arr):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for num in nums:
    arr.append(num)
    dfs(arr)
    arr.pop()

dfs([])
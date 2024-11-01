n, sizeN = list(map(int, input().split()))
nums = list(map(int, input().split()))
nums.sort()

def dfs(arr, start):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for i in range(start, n):
    arr.append(nums[i])
    dfs(arr, i)
    arr.pop()

dfs([], 0)
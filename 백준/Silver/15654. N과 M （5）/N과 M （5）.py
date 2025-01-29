n, sizeN = list(map(int, input().split()))
nums = list(map(int, input().split()))
nums.sort()

answer = []

def dfs(arr):
  if len(arr) == sizeN:
    answer.append(" ".join(list(map(str, arr))))
    return
  
  for i in range(n):
    if nums[i] in arr:
      continue
    arr.append(nums[i])
    dfs(arr)
    arr.pop()

dfs([])

print("\n".join(answer))
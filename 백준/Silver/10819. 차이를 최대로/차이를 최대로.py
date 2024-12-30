n = int(input())
nums = list(map(int , input().split()))

answer = 0

def dfs(arr):
  global answer

  if len(arr) == n:
    curSum = 0
    for i in range(n-1):
      curSum += abs(nums[arr[i]] - nums[arr[i+1]])
    
    answer = max(answer, curSum)
    return

  for i in range(n):
    if i in arr:
      continue
    arr.append(i)
    dfs(arr)
    arr.pop()

dfs([])

print(answer)
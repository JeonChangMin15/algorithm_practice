n, targetSum = list(map(int, input().split()))
nums = list(map(int, input().split()))
answer = 0

def dfs(arr, start):
  global answer
  if len(arr) and sum(arr) == targetSum:
    answer +=1

  for i in range(start, n):
    arr.append(nums[i])
    dfs(arr, i+1)
    arr.pop()

dfs([], 0)

print(answer)
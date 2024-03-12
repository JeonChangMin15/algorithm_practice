n = int(input())
nums = list(map(int, input().split()))
answer = 0

def dfs(arr):
  global answer
  if len(arr) == n:
    total = 0
    for i in range(n-1):
      idx = arr[i]
      nextIdx = arr[i+1]
      total += abs(nums[idx] - nums[nextIdx])

    answer = max(answer, total)
    return

  for i in range(n):
    if i in arr:
      continue
    arr.append(i)
    dfs(arr)
    arr.pop()

dfs([])

print(answer)
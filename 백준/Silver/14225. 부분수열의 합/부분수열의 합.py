n = int(input())
nums = list(map(int, input().split()))

results = set()

def dfs(arr, start):
  results.add(sum(list(arr)))
    
  for i in range(start, n):
    arr.append(nums[i])
    dfs(arr, i + 1)
    arr.pop()

dfs([], 0)

maxSum = max(list(results))
answer = 0

for i in range(1, maxSum):
  if i not in results:
    answer = i
    break

if answer == 0:
  print(maxSum + 1)
else:
  print(answer)
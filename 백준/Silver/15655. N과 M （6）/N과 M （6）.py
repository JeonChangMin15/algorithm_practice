# 오름차순으로 먼저 정리
# 첫번째줄에 n, sizeN
# arr, start 인자로 백트래킹하면된다

n, sizeN = list(map(int, input().split()))
nums = list(map(int, input().split()))
nums.sort()

def dfs(arr, start):
  if len(arr) == sizeN:
    print(" ".join(list(map(str, arr))))
    return

  for i in range(start, n):
    arr.append(nums[i])
    dfs(arr, i+1)
    arr.pop()

dfs([], 0)
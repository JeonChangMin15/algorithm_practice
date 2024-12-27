target = int(input())
nums = []
def dfs(arr):
  val = "".join(list(map(str, arr)))

  if len(arr):
    nums.append(int(val))

  for i in range(0,10):
    if len(arr) == 0 or arr[-1] > i:
      arr.append(i)
      dfs(arr)
      arr.pop()

dfs([])
nums.sort()
if len(nums) < target:
  print(-1)
else:
  print(nums[target-1])
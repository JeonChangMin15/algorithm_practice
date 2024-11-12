n, sizeN = list(map(int, input().split()))
nums = list(map(int, input().split()))
nums.sort()

comb = []

def dfs(arr1, arr2):
  val = " ".join(list(map(str, arr1)))

  if len(arr1) == sizeN and val not in comb:
    comb.append(val)
    print(val)
    return

  for i in range(n):
    if i not in arr2:
      arr1.append(nums[i])
      arr2.append(i)
      dfs(arr1, arr2)
      arr1.pop()
      arr2.pop()

dfs([], [])
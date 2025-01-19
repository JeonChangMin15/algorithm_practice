n = int(input())
nums = list(map(int, input().split()))
nums.sort()
testN = int(input())
cases = list(map(int, input().split()))

def searchInclude(target):
  lt = 0
  rt = n-1
  isInclude = False

  while lt <= rt:
    mid = (lt +rt)//2

    if nums[mid] == target:
      isInclude = True
      break

    if nums[mid] < target:
      lt = mid + 1
    else:
      rt = mid - 1

  return 1 if isInclude else 0

answer = []

for val in cases:
  answer.append(searchInclude(val))

print(" ".join(list(map(str, answer))))
testN = int(input())

def binaryTest():
  n = int(input())
  nums = list(map(int, input().split()))
  nums.sort()
  sampleN = int(input())
  sampleList = list(map(int, input().split()))
  arr = []

  for sample in sampleList:
    global answer
    lt  = 0
    rt = n - 1
    answer = 0
    
    while lt <= rt:
      mid = (lt+rt) // 2

      if sample == nums[mid]:
        answer = 1
        break
      elif sample < nums[mid]:
        rt = mid - 1
      else:
        lt = mid + 1
    arr.append(answer)
  
  print("\n".join(list(map(str, arr))))

for i in range(testN):
  binaryTest()
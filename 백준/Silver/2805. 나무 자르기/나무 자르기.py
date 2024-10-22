treeN, targetLen = list(map(int, input().split()))
arr = list(map(int, input().split()))

start = 0
end = max(arr)
answer = 0

while start<=end:
  mid = (start+end) // 2
  resLen = 0
  for v in arr:
    if v > mid:
      resLen += v - mid

  if resLen >= targetLen:
    answer = mid
    start = mid + 1
  else:
    end = mid - 1

print(answer)
endDay, total = list(map(int, input().split()))
isFind = False
for i in range(1, total+1):
  if isFind:
    break
  for j in range(i, total+1):
    dp = [0]*endDay
    dp[0] = i
    dp[1] = j

    for idx in range(2, endDay):
      dp[idx] = dp[idx-1] + dp[idx-2]
    
    if dp[endDay-1] == total:
      print(i)
      print(j)
      isFind = True
      break

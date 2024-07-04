coinN, target = list(map(int, input().split()))
coins = []

for i in range(coinN):
  coins.append(int(input()))

dp = [float('inf')]*(target+1)

for i in range(1, target+1):
  if i in coins:
    dp[i] = 1
  else:
    lt = 1
    rt = i-1
    cnt = float('inf')

    while lt<=rt:
      cnt = min(dp[lt]+dp[rt], cnt)
      lt+=1
      rt-=1

    dp[i] = cnt

print(dp[target] if dp[target] != float('inf') else -1)
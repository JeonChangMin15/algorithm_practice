stoneN = int(input())
jump = []

for i  in range(stoneN-1):
  jump.append(list(map(int, input().split())))

superJump = int(input())

dp = [[float('inf'), float('inf')] for _ in range(stoneN)]

dp[0][0] = 0
dp[0][1] = 0

if stoneN >= 2:
  dp[1][0] = jump[0][0]
  dp[1][1] = jump[0][0]

if stoneN >= 3:
  dp[2][0] = min(dp[1][0] + jump[1][0], dp[0][0] + jump[0][1])
  dp[2][1] = min(dp[1][0] + jump[1][0], dp[0][0] + jump[0][1])

for i in range(3, stoneN):
  dp[i][0] = min(dp[i-1][0]+jump[i-1][0], dp[i-2][0] + jump[i-2][1])
  dp[i][1] = min(dp[i-1][1]+ jump[i-1][0], dp[i-2][1] +jump[i-2][1], dp[i-3][0] + superJump)

print(min(dp[stoneN-1]))
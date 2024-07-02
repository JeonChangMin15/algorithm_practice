rowN, colN = list(map(int, input().split()))
grid = []
areaCase = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

caseN = int(input())

for i in range(caseN):
  x1,y1,x2,y2 = list(map(int, input().split()))
  areaCase.append([x1-1, y1-1, x2-1, y2-1])

dp = [[0]*colN for _ in range(rowN)]

dp[0][0] = grid[0][0]

for i in range(rowN):
  for j in range(colN):
    if i==0 and j==0:
      continue

    if i==0:
      dp[i][j] = dp[i][j-1] + grid[i][j]
      continue

    if j==0:
      dp[i][j] = dp[i-1][j] + grid[i][j]
      continue

    dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + grid[i][j]

for startX, startY, endX, endY in areaCase:
  endAreaPeople = dp[endX][endY]
  if startX >= 1:
    endAreaPeople -= dp[startX-1][endY]
  if startY >= 1:
    endAreaPeople -= dp[endX][startY-1]
  if startX>=1 and startY>=1:
    endAreaPeople += dp[startX-1][startY-1]

  print(endAreaPeople)
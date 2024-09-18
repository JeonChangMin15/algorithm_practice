import sys
sys.setrecursionlimit(10**5)

caseN = int(input())

for i in range(caseN):
  rowN, colN, fruitN = list(map(int, input().split()))
  grid = [[0]*colN for _ in range(rowN)]

  for i in range(fruitN):
    x, y = list(map(int, input().split()))
    grid[x][y] = 1

  def dfs(x,y):
    if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y]==0:
      return  

    grid[x][y] = 0

    dfs(x-1, y)
    dfs(x+1, y)
    dfs(x, y-1)
    dfs(x, y+1)

  answer = 0

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == 1:
        answer += 1
        dfs(i, j)

  print(answer)
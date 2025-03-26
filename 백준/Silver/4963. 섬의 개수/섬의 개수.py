import sys
sys.setrecursionlimit(10**5)

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
while True:
  colN, rowN = list(map(int, input().split()))
  
  if rowN == 0 and colN ==0:
    break
  grid = []

  for i in range(rowN):
    grid.append(list(map(int, input().split())))

  def dfs(x, y):
    if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] ==0 :
      return

    grid[x][y] = 0
    for dx, dy in dirs:
      dfs(x +dx, y + dy)

  answer = 0
  for i in range(rowN):
    for j in range(colN):
      if grid[i][j]:
        dfs(i, j)
        answer += 1

  print(answer)
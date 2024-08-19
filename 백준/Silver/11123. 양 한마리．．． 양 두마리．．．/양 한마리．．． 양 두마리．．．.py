import sys
sys.setrecursionlimit(10**5)

n = int(input())

for i in range(n):
  rowN, colN = list(map(int, input().split()))
  grid = []

  for i in range(rowN):
    grid.append(list(input()))

  def dfs(x, y):
    if x <0 or x>=rowN or y<0 or y>=colN or grid[x][y] =='.':
      return

    grid[x][y] = '.'

    up = dfs(x-1, y)
    down = dfs(x+1, y)
    left = dfs(x, y-1)
    right = dfs(x, y+1)

    return 

  area = 0

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == '.':
        continue
      
      dfs(i, j)
      area += 1

  print(area)
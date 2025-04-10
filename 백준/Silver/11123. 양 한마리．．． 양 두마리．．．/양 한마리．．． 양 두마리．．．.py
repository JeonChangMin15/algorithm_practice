import sys
sys.setrecursionlimit(10**5)

testN = int(input())

def dfs(grid, x, y, rowN, colN):
  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == '.':
    return
  grid[x][y] = '.'

  dfs(grid, x-1, y, rowN, colN)
  dfs(grid, x+1, y, rowN, colN)
  dfs(grid, x, y-1, rowN, colN)
  dfs(grid, x, y+1, rowN, colN)

def searchShip():
  rowN, colN = list(map(int,input().split()))
  grid = []
  answer = 0

  for i in range(rowN):
    grid.append(list(map(str, input())))

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == '#':
        dfs(grid, i, j, rowN, colN)
        answer += 1

  print(answer)

  

for i in range(testN):
  searchShip()
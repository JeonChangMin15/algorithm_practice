testN = int(input())

dirs =[[-1, 0], [1, 0], [0,- 1], [0, 1]]

def dfs(x, y, grid, rowN, colN):
  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == 0:
    return
  
  grid[x][y] = 0

  for dx, dy in dirs:
    dfs(x + dx, y+dy, grid, rowN, colN)

def findArea():
  colN, rowN, areaN = list(map(int, input().split()))
  grid = [[0]*colN for _ in range(rowN)]
  answer = 0

  for _ in range(areaN):
    y, x = list(map(int, input().split()))
    grid[x][y] = 1

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == 1:
        dfs(i, j, grid, rowN, colN)
        answer += 1

  print(answer)



for _ in range(testN):
  findArea()
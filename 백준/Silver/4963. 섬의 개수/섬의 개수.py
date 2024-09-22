while True:
  colN, rowN = list(map(int, input().split()))
  if colN == 0 and rowN == 0:
    break

  grid = []
  for i in range(rowN):
    grid.append(list(map(int, input().split())))
  
  dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
  answer = 0

  def dfs(x, y):
    if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] ==0:
      return
    grid[x][y] = 0

    for dx, dy in dirs:
      dfs(x+dx, y + dy)

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == 1:
        answer += 1
        dfs(i, j)

  print(answer)
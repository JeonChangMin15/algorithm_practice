testN = int(input())
dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

for i in range(testN):
  rowN, colN, coorN = list(map(int, input().split()))
  grid = [[0]*colN for _ in range(rowN)]

  for _ in range(coorN):
    x, y = list(map(int, input().split()))
    grid[x][y] = 1

  answer = 0

  def dfs(x, y):
    if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == 0:
      return
    grid[x][y] = 0
    
    for dx, dy in dirs:
      dfs(x+dx, y + dy)

  for x in range(rowN):
    for y in range(colN):
      if grid[x][y] == 1:
        dfs(x, y)
        answer += 1

  print(answer)
colN, rowN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

visited = [[False]*colN for _ in range(rowN)]

def dfs(x, y, team):
  if x < 0 or x>= rowN or y<0 or y>=colN or team != grid[x][y] or visited[x][y]:
    return 0

  visited[x][y] = True
  up = dfs(x - 1, y, team)
  down = dfs(x+1, y, team)
  left = dfs(x, y-1, team)
  right = dfs(x, y+1, team)

  return 1+up+down+left+right

white = 0
blue = 0

for i in range(rowN):
  for j in range(colN):
    if not visited[i][j]:
      area = dfs(i, j, grid[i][j])
      if grid[i][j] == 'W':
        white += area*area
      else:
        blue += area*area

print(white, blue)
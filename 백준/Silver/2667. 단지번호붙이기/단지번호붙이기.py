n = int(input())
grid = []

for i in range(n):
  grid.append(list(map(int, input())))

def dfs(x, y):
  if x < 0 or x >=n or y < 0 or y >=n or grid[x][y] == 0:
    return 0

  grid[x][y] = 0
  up = dfs(x - 1, y)
  down = dfs(x + 1, y)
  left = dfs(x, y-1)
  right = dfs(x, y+1)

  return 1 + up + down + left + right

areas = []

for i in range(n):
  for j in range(n):
    if grid[i][j] == 1:
      areas.append(dfs(i, j))

areas.sort()

print(len(areas))
print("\n".join(list(map(str, areas))))
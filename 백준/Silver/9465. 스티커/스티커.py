n = int(input())

for i in range(n):
  colN = int(input())
  grid = []
  grid.append(list(map(int, input().split())))
  grid.append(list(map(int, input().split())))

  for j in range(1, colN):
    if j == 1:
      grid[0][j] += grid[1][0]
      grid[1][j] += grid[0][0]
      continue

    grid[0][j] += max(grid[1][j-1], grid[1][j-2])
    grid[1][j] += max(grid[0][j-1], grid[0][j-2])

  print(max(grid[0][colN-1], grid[1][colN-1]))
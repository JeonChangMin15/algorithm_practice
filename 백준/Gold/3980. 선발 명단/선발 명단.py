n = int(input())

for i in range(n):
  grid = []
  visited = [False]*11

  for i in range(11):
    grid.append(list(map(int, input().split())))

  max_val = 0

  def dfs(order, total):
    global max_val

    if all(v for v in visited) and order == 11:
      max_val = max(max_val, total)
      return

    for i in range(11):
      if grid[order][i] > 0 and not visited[i]:
        visited[i] = True
        dfs(order + 1, total + grid[order][i])
        visited[i] = False

  dfs(0, 0)

  print(max_val)
from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []
queue = deque()
visited = [[False]*colN for _ in range(rowN)]
dist = [[0]*colN for _ in range(rowN)]

for i in range(rowN):
  grid.append(list(map(int, input().split())))

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 2:
      queue.append([i, j, 0])
      visited[i][j] = True

dirs = [[-1,0],[1, 0],[0, -1], [0, 1]]

while len(queue):
  x, y, cur = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and not visited[nextX][nextY] and grid[nextX][nextY] == 1
    if isValid:
      queue.append([nextX, nextY, cur + 1])
      dist[nextX][nextY] = cur + 1
      visited[nextX][nextY] = True

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 1 and dist[i][j] == 0:
      dist[i][j] = -1

for i in range(rowN):
  print(" ".join(list(map(str, dist[i]))))
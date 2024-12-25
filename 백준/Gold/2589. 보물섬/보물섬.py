from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

def bfs(startX, startY):
  queue = deque()
  queue.append([startX, startY, 0])
  visited = [[False]*colN for _ in range(rowN)]
  maxDist = 0
  visited[startX][startY] = True

  while len(queue):
    x, y, dist = queue.popleft()
    maxDist = max(dist, maxDist)

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY]=='L' and not visited[nextX][nextY]
      if isValid:
        queue.append([nextX, nextY, dist + 1])
        visited[nextX][nextY] = True

  return maxDist

answer = 0

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 'L':
      dist = bfs(i, j)
      answer = max(dist, answer)

print(answer)
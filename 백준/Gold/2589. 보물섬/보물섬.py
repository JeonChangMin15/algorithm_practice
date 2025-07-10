from collections import deque

rowN, colN = list(map(int,input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(str, input())))

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
def bfs(startX, startY):
  queue = deque()
  queue.append([startX, startY, 0])
  timeGrid = [[float('inf')]*colN for _ in range(rowN)]
  timeGrid[startX][startY] = 0
  maxTime = 0

  while len(queue):
    x, y, t = queue.popleft()
    maxTime = max(maxTime, t)

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<rowN and 0<=nextY<colN and t+1<timeGrid[nextX][nextY] and grid[nextX][nextY] == 'L'
      if isValid:
        queue.append([nextX, nextY, t+1])
        timeGrid[nextX][nextY] = t + 1

  return maxTime

answer = 0

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 'L':
      answer = max(answer, bfs(i, j))

print(answer)
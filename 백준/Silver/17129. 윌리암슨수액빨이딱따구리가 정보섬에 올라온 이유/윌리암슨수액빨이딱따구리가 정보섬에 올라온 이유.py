from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input())))

queue = deque()

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 2:
      queue.append([i,j,0])
      grid[i][j] = 1

dist = -1
dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while len(queue):
  x, y, cnt = queue.popleft()

  if dist != -1:
    break

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] != 1
    if isValid:
      if grid[nextX][nextY] == 3 or grid[nextX][nextY] == 4 or grid[nextX][nextY] == 5:
        dist = cnt +1
        break

      queue.append([nextX, nextY, cnt + 1])
      grid[nextX][nextY] = 1

if dist == -1:
  print('NIE')
else:
  print("TAK")
  print(dist)
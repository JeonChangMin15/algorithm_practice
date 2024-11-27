from collections import deque

colN, rowN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

queue = deque()
for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 1:
      queue.append([i, j, 0])

day = 0
dirs = [[-1,0],[1,0],[0,-1],[0,1]]

while len(queue):
  x, y, curDay = queue.popleft()
  day = curDay

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] == 0
    if isValid:
      grid[nextX][nextY] = 1
      queue.append([nextX, nextY, curDay+1])

isZero = True

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 0:
      isZero = False

print(day if isZero else -1)
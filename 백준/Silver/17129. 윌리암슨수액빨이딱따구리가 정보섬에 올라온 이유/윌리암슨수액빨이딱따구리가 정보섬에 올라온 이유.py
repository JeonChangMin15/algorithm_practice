
from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for _ in range(rowN):
  grid.append(list(map(int, input())))

queue = deque()

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 2:
      queue.append([i,j,0])
      grid[i][j] = 1


isValid = False
minDist = float('inf')
dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
food = [3,4,5]


while len(queue):
  x,y,d = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isGo = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] != 1
    if isGo:
      if grid[nextX][nextY] in food:
        isValid = True
        minDist = min(minDist, d+1)
      queue.append([nextX, nextY, d+1])
      grid[nextX][nextY] = 1

if isValid:
  print("TAK")
  print(minDist)
else:
  print("NIE")
from collections import deque

rowN, colN, timeLimit = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

queue = deque()
queue.append([0,0,0])
timeGrid = [[float('inf')]*colN for _ in range(rowN)]

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while len(queue):
  x, y, curTime = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = (0<=nextX<rowN and 
               0<=nextY<colN and 
               grid[nextX][nextY] != 1 and 
               curTime+1 < timeGrid[nextX][nextY])
    if isValid:
      queue.append([nextX, nextY, curTime +1])
      timeGrid[nextX][nextY] = curTime + 1

normalTime = timeGrid[rowN-1][colN-1]
weaponTime = float('inf')

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 2 and timeGrid[i][j] != float('inf'):
      weaponTime = timeGrid[i][j] + (rowN-1-i)+(colN-1-j)

if min(normalTime, weaponTime) <= timeLimit:
  print(min(normalTime, weaponTime))
else:
  print("Fail")
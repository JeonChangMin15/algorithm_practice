from collections import deque

colN, rowN, heightN = list(map(int, input().split()))
grid = []

for i in range(heightN):
  g = []
  for i in range(rowN):
    g.append(list(map(int, input().split())))
  
  grid.append(g)

queue = deque()

for i in range(heightN):
  for j in range(rowN):
    for k in range(colN):
      if grid[i][j][k] == 1:
        queue.append([i,j,k,0])

dirs =[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]

lastDay = 0

while len(queue):
  z,x,y,day = queue.popleft()
  lastDay = max(lastDay, day)

  for dz, dx, dy in dirs:
    nextZ = z + dz
    nextX = x + dx
    nextY = y + dy
    isValid = (
      0<=nextZ<heightN and 
      0<=nextX<rowN and 
      0<=nextY<colN and 
      grid[nextZ][nextX][nextY] == 0
    )

    if isValid:
      queue.append([nextZ, nextX, nextY, day +1])
      grid[nextZ][nextX][nextY] = 1

for i in range(heightN):
  for j in range(rowN):
    for k in range(colN):
      if grid[i][j][k] == 0:
        lastDay = -1

print(lastDay)
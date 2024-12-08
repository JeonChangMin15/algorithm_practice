from collections import deque

colN, rowN, heightN = list(map(int, input().split()))
grid = [[] for _ in range(heightN)]

queue = deque()

for i in range(heightN):
  for j in range(rowN):
    grid[i].append(list(map(int, input().split())))

for z in  range(heightN):
  for x in range(rowN):
    for y in range(colN):
      if grid[z][x][y] == 1:
        queue.append([z,x,y,0])

dirs = [[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]

answer = 0

while len(queue):
  z,x,y,day = queue.popleft()
  answer = max(answer, day)

  for dz, dx, dy in dirs:
    nextZ = z + dz
    nextX = x + dx
    nextY = y + dy
    isValid = (0<=nextZ<heightN and 
               0<=nextX<rowN and 
               0<=nextY<colN and
               grid[nextZ][nextX][nextY] == 0)

    if isValid:
      queue.append([nextZ, nextX, nextY, day + 1])
      grid[nextZ][nextX][nextY] = 1

for z in range(heightN):
  for x in range(rowN):
    for y in range(colN):
      if grid[z][x][y] == 0:
        answer = -1

print(answer)
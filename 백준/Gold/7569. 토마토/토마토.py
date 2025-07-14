from collections import deque

colN, rowN, height = list(map(int, input().split()))
grid = []
queue = deque()

for i in range(height):
  arr = []
  for j in range(rowN):
    arr.append(list(map(int, input().split())))
  grid.append(arr)

for z in range(height):
  for x in range(rowN):
    for y in range(colN):
      if grid[z][x][y] == 1:
        queue.append([z,x,y,0])

dirs = [[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]
answer = 0
while len(queue):
  z,x,y, time = queue.popleft()
  answer = max(answer, time)

  for dz, dx,dy in dirs:
    nextZ = z + dz
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextZ<height and 0<=nextX<rowN and 0<=nextY<colN and grid[nextZ][nextX][nextY] == 0
    if isValid:
      queue.append([nextZ, nextX, nextY, time + 1])
      grid[nextZ][nextX][nextY] = 1

for z in range(height):
  for x in range(rowN):
    for y in range(colN):
      if grid[z][x][y] == 0:
        answer = -1

print(answer)
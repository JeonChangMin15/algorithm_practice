from collections import deque

sizeN, maxNum = list(map(int, input().split()))
grid = []

for i in range(sizeN):
  grid.append(list(map(int, input().split())))

targetTime, targetX, targetY = list(map(int, input().split()))

arr = []
queue =deque()

for i in range(sizeN):
  for j in range(sizeN):
    if grid[i][j] != 0:
      arr.append([i,j,grid[i][j]])

arr.sort(key=lambda x: x[2])

for x,y,val in arr:
  queue.append([x,y,val,0])

dirs = [[-1, 0],[1, 0],[0, -1],[0, 1]]

while len(queue):
  curX, curY, virusNum, time = queue.popleft()
  if time >= targetTime:
    break
  
  for dx, dy in dirs:
    nextX = curX + dx
    nextY = curY + dy
    isValid = 0<=nextX<sizeN and 0<=nextY<sizeN and grid[nextX][nextY] == 0
    
    if isValid:
      queue.append([nextX, nextY, virusNum, time + 1])
      grid[nextX][nextY] = virusNum


print(grid[targetX-1][targetY-1] if grid[targetX-1][targetY-1] !=0 else 0)
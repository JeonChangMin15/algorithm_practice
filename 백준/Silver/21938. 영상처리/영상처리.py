from collections import deque

rowN, colN = list(map(int,input().split()))
grid = []
newGrid = [[0]*colN for _ in range(rowN)]

for i in range(rowN):
  grid.append(list(map(int, input().split())))

target = int(input())

for i in range(rowN):
  for j in range(colN):
    average = (grid[i][3*j]+grid[i][3*j+1]+grid[i][3*j+2]) / 3
    newGrid[i][j] = 255 if average >= target else 0

answer = 0
dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]

def bfs(startX, startY):
  queue = deque()
  queue.append([startX, startY])

  while len(queue):
    x, y = queue.popleft()
    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<rowN and 0<=nextY<colN and newGrid[nextX][nextY] == 255
      if isValid:
        queue.append([nextX, nextY])
        newGrid[nextX][nextY] = 0
  

for i in range(rowN):
  for j in range(colN):
    if newGrid[i][j] == 255:
      bfs(i, j)
      answer += 1

print(answer)
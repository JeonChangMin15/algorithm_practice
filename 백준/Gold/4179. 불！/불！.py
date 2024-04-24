from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

queue = deque()

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == "J":
      queue.append([i, j, 0])

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == "F":
      queue.append([i, j, 0])

answer = "IMPOSSIBLE"
dirs = [[1,0], [-1,0], [0,1], [0,-1]]

while len(queue):
  x, y, time = queue.popleft()

  if grid[x][y] == "J" and (x == 0 or x == rowN-1 or y == 0 or y==colN-1):
    answer = time + 1
    break

  if grid[x][y] == "J":
    for dx, dy in dirs:
      nextX = x +dx
      nextY = y + dy
      isValid = nextX >= 0 and nextX < rowN and nextY >=0 and nextY < colN and grid[nextX][nextY] == '.'

      if isValid:
        queue.append([nextX, nextY, time +1])
        grid[nextX][nextY] = "J"

  if grid[x][y] == 'F':
    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = (nextX >= 0 and
                 nextX < rowN and
                 nextY >= 0 and
                 nextY < colN and
                 (grid[nextX][nextY] =='.' or grid[nextX][nextY] == "J"))
      
      if isValid:
        queue.append([nextX, nextY, time + 1])
        grid[nextX][nextY] = "F"

print(answer)
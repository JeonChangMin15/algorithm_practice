from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

queue = deque()

endX = 0
endY = 0

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 'S':
      queue.append([i,j,0])
    
    if grid[i][j] == 'D':
      endX = i
      endY = j

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == '*':
      queue.append([i,j,0])

answer = "KAKTUS"
isEnd = False

dirs = [[1,0],[-1,0],[0,1],[0,-1]]

while len(queue) and not isEnd:
  x,y,cnt = queue.popleft()

  if x == endX and y == endY:
    answer = cnt
    break

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<= nextX < rowN and 0 <= nextY < colN
    if not isValid:
      continue

    if grid[x][y] == 'S':
      if grid[nextX][nextY] == '.':
        queue.append([nextX, nextY, cnt + 1])
        grid[nextX][nextY] = "S"

      if grid[nextX][nextY] == 'D':
        queue.append([nextX, nextY, cnt + 1])
        answer = cnt + 1
        isEnd = True

    if grid[x][y] == '*':
      if grid[nextX][nextY] == '.' or grid[nextX][nextY] == 'S':
        queue.append([nextX, nextY, cnt + 1])
        grid[nextX][nextY] = '*'

print(answer)


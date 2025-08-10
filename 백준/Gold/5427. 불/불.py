from collections import deque

testN = int(input())

def bfs():
  global answer

  colN, rowN = list(map(int, input().split()))
  grid = []
  queue = deque()

  for _ in range(rowN):
    grid.append(list(input()))

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == '*':
        queue.append([i, j, '*', 0])

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == '@':
        queue.append([i, j, '@', 0])

  dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  answer = 'IMPOSSIBLE'

  while len(queue):
    x, y, prevType, time = queue.popleft()

    if prevType == '@' and (x == 0 or x == rowN-1 or y == 0 or y == colN-1):
      answer = time+1
      break
    
    if prevType == '*':
      for dx, dy in dirs:
        nextX = x + dx
        nextY = y + dy
        isNextFire = 0<=nextX<rowN and 0<=nextY<colN and (grid[nextX][nextY] == '.' or grid[nextX][nextY] == '@')
        if isNextFire:
          queue.append([nextX, nextY, prevType, time+1])
          grid[nextX][nextY] = '*'

    if prevType == '@':
      for dx, dy in dirs:
        nextX = x + dx
        nextY = y + dy
        isNextMove = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] == '.'
        if isNextMove:
          queue.append([nextX, nextY,prevType, time+1])
          grid[nextX][nextY] = '@'

  print(answer)

for _ in range(testN):
  bfs()
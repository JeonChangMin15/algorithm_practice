from collections import deque

n = int(input())

def bfs():
  global answer

  colN, rowN = list(map(int, input().split()))
  grid = []

  for i in range(rowN):
    grid.append(list(input()))

  queue = deque()

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == '@':
        queue.append([i, j, 0])

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == '*':
        queue.append([i, j, 0]) 

  answer = 0
  dirs = [[-1, 0],[1, 0],[0,-1],[0,1]]

  while len(queue):
    x, y, time = queue.popleft()
    if grid[x][y] =='@' and (x == 0 or y == 0 or x ==rowN-1 or y == colN-1):
      answer = time + 1
      break

    if grid[x][y] == '@':
      for dx, dy in dirs:
        nextX = x + dx
        nextY = y + dy
        isValid = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] == '.'
        if isValid:
          queue.append([nextX, nextY, time + 1])
          grid[nextX][nextY] = '@'

    if grid[x][y] == '*':
      for dx, dy in dirs:
        nextX = x + dx
        nextY = y + dy
        isValid = 0<=nextX<rowN and 0<=nextY<colN and (grid[nextX][nextY] =='.' or grid[nextX][nextY]=='@')
        if isValid:
          queue.append([nextX, nextY, time + 1])
          grid[nextX][nextY] = '*'

  print(answer if answer != 0 else 'IMPOSSIBLE')


for i in range(n):
  bfs()
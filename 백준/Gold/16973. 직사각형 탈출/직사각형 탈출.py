from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

sizeH, sizeW, startX, startY, finishX, finishY = list(map(int, input().split()))
visited = [[False]*colN for _ in range(rowN)]
visited[startX-1][startY-1] = True

queue = deque()
queue.append([startX-1, startY-1, 0])
answer = -1

def checkWall(x, y):
  if x + sizeH-1 >= rowN or y + sizeW-1 >= colN:
    return False

  for i in range(x, x+sizeH):
    if grid[i][y] == 1 or grid[i][y+sizeW-1]:
      return False

  for j in range(y, y+sizeW):
    if grid[x][j] == 1 or grid[x+sizeH-1][j]:
      return False

  return True

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while len(queue):
  x, y, cnt = queue.popleft()

  if x == finishX-1 and y == finishY-1:
    answer = cnt
    break

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and not visited[nextX][nextY] and grid[nextX][nextY] == 0

    if isValid:
      visited[nextX][nextY] = True
      if checkWall(nextX, nextY):
        queue.append([nextX, nextY, cnt + 1])

print(answer)
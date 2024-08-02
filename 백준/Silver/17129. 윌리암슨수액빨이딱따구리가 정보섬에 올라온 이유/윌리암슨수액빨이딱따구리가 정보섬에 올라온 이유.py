from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input())))

queue = deque()

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 2:
      queue.append([i,j,0])

dirs = [[-1, 0],[1, 0], [0, -1], [0, 1]]

visited = [[False]*colN for _ in range(rowN)]

food = [3,4,5]

answer = "NIE"
answerDist = 0

while len(queue):
  x,y, dist = queue.popleft()

  if grid[x][y] in food:
    answer = "TAK"
    answerDist = dist
    break

  for dx, dy in dirs:
    nextX = x+dx
    nextY = y+dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and not visited[nextX][nextY] and grid[nextX][nextY] != 1
    if isValid:
      queue.append([nextX, nextY, dist + 1])
      visited[nextX][nextY] = True

if answer == 'TAK':
  print(answer)
  print(answerDist)
else:
  print(answer)
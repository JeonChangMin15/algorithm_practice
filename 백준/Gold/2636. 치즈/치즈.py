import sys
sys.setrecursionlimit(10000)

from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input().split())))

cheeseCnt = [0]*100
time = 0

def checkCheese():
  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == 1:
        return True

  return False

dirs = [[-1,0],[1,0],[0,-1],[0,1]]

while checkCheese():
  time += 1
  visited = [[False]*colN for _ in range(rowN)]

  queue = deque()

  def dfs(x, y):
    visited[x][y] = True
    queue.append([x,y])

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<rowN and 0<=nextY<colN and not visited[nextX][nextY] and grid[nextX][nextY] == 0
      if isValid:
        dfs(nextX, nextY)

  dfs(0, 0)

  while len(queue):
    x, y = queue.popleft()

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] ==1

      if isValid:
        grid[nextX][nextY] = 0
        cheeseCnt[time] += 1

print(time)
print(cheeseCnt[time])
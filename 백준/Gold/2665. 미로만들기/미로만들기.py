from collections import deque

n = int(input())
grid = []

for i in range(n):
  grid.append(list(map(int, input())))

openRoom = [[float('inf')]*n for _ in range(n)]
openRoom[0][0] = 0

queue = deque()
queue.append([0,0,0])

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while len(queue):
  x, y, cnt = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<n and 0<=nextY<n

    if not isValid:
      continue

    if grid[nextX][nextY] == 1 and cnt < openRoom[nextX][nextY]:
      queue.append([nextX, nextY, cnt])
      openRoom[nextX][nextY] = cnt

    if grid[nextX][nextY] == 0 and cnt + 1 < openRoom[nextX][nextY]:
      queue.append([nextX, nextY, cnt + 1])
      openRoom[nextX][nextY] = cnt + 1

print(openRoom[n-1][n-1])


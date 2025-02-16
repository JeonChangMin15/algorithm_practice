from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input())))

dist = [[float('inf')]*colN for _ in range(rowN)]
dist[0][0] = 0

queue = deque()
queue.append([0,0,0])
dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while len(queue):
  x, y, d = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and grid[nextX][nextY] == 1 and d+1 < dist[nextX][nextY]

    if isValid:
      queue.append([nextX, nextY, d + 1])
      dist[nextX][nextY] = d + 1

print(dist[rowN-1][colN-1] + 1)
from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input())))

dist = [[float('inf')]*colN for _ in range(rowN)]
dist[0][0] = 1

queue = deque()
queue.append([0,0, 1])

dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while len(queue):
  x, y, curDist = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = (0<=nextX<rowN and
              0<=nextY<colN and 
              curDist+1 < dist[nextX][nextY] and 
              grid[nextX][nextY] ==1) 
    if isValid:
      queue.append([nextX, nextY, curDist+1])
      dist[nextX][nextY] = curDist + 1

print(dist[rowN-1][colN-1])
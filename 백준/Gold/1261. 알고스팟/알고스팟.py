from collections import deque

colN, rowN = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(map(int, input())))

visited = [[float('inf')]*colN for _ in range(rowN)]

visited[0][0] = 0

queue = deque()
queue.append([0,0,0])

dirs = [[-1,0],[1,0],[0,-1],[0,1]]

while len(queue):
  x,y,cnt = queue.popleft()

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0 <= nextX < rowN and 0 <= nextY < colN

    if not isValid:
      continue

    if grid[nextX][nextY] == 0 and cnt < visited[nextX][nextY]:
      visited[nextX][nextY] = cnt
      queue.append([nextX, nextY, cnt])

    if grid[nextX][nextY] == 1 and cnt + 1 < visited[nextX][nextY]:
      visited[nextX][nextY] = cnt + 1
      queue.append([nextX, nextY, cnt + 1])

print(visited[rowN-1][colN-1])
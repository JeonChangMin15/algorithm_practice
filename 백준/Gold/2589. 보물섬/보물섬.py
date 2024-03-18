from collections import deque

rowN, colN = list(map(int, input().split()))
grid = []
for i in range(rowN):
  grid.append(list(input()))

def bfs(startX, startY):
  visited = [[False]*colN for _ in range(rowN)]
  queue = deque()
  queue.append([startX, startY, 0])
  visited[startX][startY] = True
  maxDist = 0
  
  dirs =[[-1,0],[1,0],[0,-1],[0,1]]

  while len(queue):
    x, y, dist = queue.popleft()
    maxDist = max(maxDist, dist)

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = (0<= nextX < rowN and 
                 0<=nextY<colN and 
                 not visited[nextX][nextY] and 
                 grid[nextX][nextY] == "L")

      if isValid:
        visited[nextX][nextY] = True
        queue.append([nextX, nextY, dist + 1])
  
  return maxDist

answer = 0

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 'W':
      continue
    result = bfs(i, j)
    answer = max(answer, result)

print(answer)

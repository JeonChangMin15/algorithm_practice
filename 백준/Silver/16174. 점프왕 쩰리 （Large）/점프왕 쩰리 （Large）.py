from collections import deque

n = int(input())
grid = []

for i in range(n):
  grid.append(list(map(int, input().split())))

queue = deque()
queue.append([0,0, grid[0][0]])
visited = [[False]*n for _ in range(n)]
visited[0][0] = True

isReach = False

while len(queue):
  x,y, dist = queue.popleft()
  dirs = [[x+dist, y],[x, y+dist]]

  if grid[x][y] == -1:
    isReach = True
    break
  
  for nextX, nextY in dirs:
    isValid = 0<=nextX<n and 0<=nextY<n and not visited[nextX][nextY]
    if isValid:
      queue.append([nextX, nextY, grid[nextX][nextY]])
      visited[nextX][nextY] = True

if isReach:
  print('HaruHaru')
else:
  print('Hing')
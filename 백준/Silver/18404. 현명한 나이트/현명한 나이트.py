from collections import deque

n, chessN = list(map(int, input().split()))
startX, startY = list(map(int, input().split()))
positions = []

for i in range(chessN):
  x,y = list(map(int, input().split()))
  positions.append([x-1, y-1])

visited = [[False]*n for _ in range(n)]
dist = [[0]*n for _ in range(n)]

queue = deque()
queue.append([startX-1, startY-1, 0])
visited[startX-1][startY-1] = True
dirs = [[-2, -1], [-2, 1],[-1, -2],[-1, 2],[1, -2],[1, 2],[2, -1],[2, 1]]

while len(queue):
  x, y, cnt = queue.popleft()
  
  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<n and 0<= nextY < n and not visited[nextX][nextY]
    if isValid:
      queue.append([nextX, nextY, cnt + 1])
      dist[nextX][nextY] = cnt + 1
      visited[nextX][nextY] = True

answer = []

for x,y in positions:
  answer.append(dist[x][y])

print(" ".join(list(map(str, answer))))
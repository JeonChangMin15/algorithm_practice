from collections import deque

n,m = list(map(int,input().split()))
startX, startY = list(map(int,input().split()))
positions = []

for i in range(m):
  x, y = list(map(int,input().split()))
  positions.append([x-1, y-1])

answer = []
dirs = [[-2, -1],[-2, 1],[-1, -2],[-1, 2],[1, -2],[1, 2],[2, -1],[2, 1]]
visited = [[float('inf')]*n for _ in range(n)]

def bfs():
  queue = deque()
  queue.append([startX-1, startY-1, 0])

  while(len(queue)):
    x,y,cnt = queue.popleft()

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<n and 0<=nextY<n and cnt+1 < visited[nextX][nextY]

      if isValid:
        queue.append([nextX, nextY, cnt+1])
        visited[nextX][nextY] = cnt +1

bfs()

for x,y in positions:
  answer.append(visited[x][y])

print(" ".join(list(map(str, answer))))

from collections import deque

n = int(input())
startX, startY, endX, endY = list(map(int, input().split()))
dirs = [[-2,-1],[-2,1],[0,-2],[0,2],[2,-1],[2,1]]

queue = deque()
queue.append([startX, startY, 0])
visited = [[False]*n for _ in range(n)]

isEnd = False
while len(queue):
  curx, cury, cnt = queue.popleft()
  if curx == endX and cury == endY:
    print(cnt)
    isEnd = True
    break

  for dx, dy in dirs:
    nextX = curx + dx
    nextY = cury + dy
    isValid = 0<=nextX<n and 0<=nextY<n and not visited[nextX][nextY]

    if isValid:
      queue.append([nextX, nextY, cnt + 1])
      visited[nextX][nextY] = True

if not isEnd:
  print(-1)
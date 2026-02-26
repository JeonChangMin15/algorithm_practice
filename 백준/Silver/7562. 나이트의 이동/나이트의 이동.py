from collections import deque

testN = int(input())

def bfs():
  n = int(input())
  startX, startY = list(map(int, input().split()))
  endX, endY = list(map(int, input().split()))
  queue = deque()
  queue.append([startX, startY, 0])
  
  dirs = [[-2, -1], [-1, -2], [-2, 1],[-1, 2],[1, -2],[2, -1],[2, 1],[1, 2]]

  visited = [[False]*n for _ in range(n)]
  visited[startX][startY] = True

  while len(queue):
    curX, curY, cnt = queue.popleft()
    if curX == endX and curY == endY:
      print(cnt)
      break

    for dx, dy in dirs:
      nextX = curX + dx
      nextY = curY + dy
      isValid = 0<=nextX<n and 0<=nextY<n and not visited[nextX][nextY]
      if isValid:
        queue.append([nextX, nextY, cnt +1])
        visited[nextX][nextY] = True

for _ in range(testN):
  bfs()
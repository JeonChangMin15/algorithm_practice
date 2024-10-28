from collections import deque

def bfs(n, startx, starty, endx, endy):
  dist = [[float('inf')]*n for _ in range(n)]
  dirs = [[-1, -2],[-2, -1],[-2, 1],[-1, 2],[1,2],[2,1],[2,-1],[1,-2]]
  dist[startx][starty] = 0

  queue = deque()
  queue.append([startx, starty, 0])

  while len(queue):
    curx, cury, curdist = queue.popleft()
    if curx == endx and cury == endy:
      print(curdist)
      break
    
    for dx, dy in dirs:
      nextX = curx + dx
      nextY = cury + dy
      isValid = 0<=nextX<n and 0<=nextY<n and curdist +1 < dist[nextX][nextY]
      if isValid:
        queue.append([nextX, nextY, curdist+1])
        dist[nextX][nextY] = curdist + 1


n = int(input())

for i in range(n):
  sizeN = int(input())
  sx, sy = list(map(int, input().split()))
  ex, ey = list(map(int, input().split()))
  bfs(sizeN, sx, sy, ex, ey)
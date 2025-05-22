from collections import deque

n = int(input())
dirs = [[-1,-2],[-2,-1],[-2,1],[-1,2],[1,-2],[2,-1],[2,1],[1,2]]

def bfs(size, startx, starty, endx, endy):
  grid = [[float('inf')]*size for _ in range(size)]
  grid[startx][starty] = 0
  queue = deque()
  queue.append([startx, starty, 0])

  while len(queue):
    x, y, cnt = queue.popleft()
    if x == endx and y == endy:
      print(cnt)
      break

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<size and 0<=nextY<size and cnt +1 < grid[nextX][nextY]
      if isValid:
        queue.append([nextX, nextY, cnt +1])
        grid[nextX][nextY] = cnt + 1


for i in range(n):
  s = int(input())
  sx, sy = map(int, input().split())
  ex, ey = map(int, input().split())
  bfs(s, sx, sy, ex, ey)
  
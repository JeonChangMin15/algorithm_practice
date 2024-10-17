from collections import deque

dirs = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]
n, targetN = list(map(int, input().split()))
startX, startY = list(map(int, input().split()))
target = []

for i in range(targetN):
  x, y = list(map(int, input().split()))
  target.append([x-1, y-1])

grid = [[float('inf')]*n for _ in range(n)]
queue = deque()
queue.append([startX-1, startY-1, 0])
grid[startX-1][startY-1] = 0

while len(queue):
  x,y,dist = queue.popleft()

  for dx, dy in dirs:
    nextX = x +dx
    nextY = y +dy
    isValid = 0<=nextX<n and 0<=nextY<n and dist+1 < grid[nextX][nextY]
    if isValid:
      queue.append([nextX,nextY, dist+1])
      grid[nextX][nextY] = dist + 1

answer = []
for x,y in target:
  answer.append(grid[x][y])

print(" ".join(list(map(str, answer))))
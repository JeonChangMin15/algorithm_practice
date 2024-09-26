from collections import deque

# 첫째줄에 rowN, colN이 주어진다
# 두번째줄부터 그리드가 0,1로 주어지고 1이 상어다
# 각 지점에 상하좌우 대각선까지 이동가능하고
# 안전거리가 가자으 큰 값을 구해야된다
# bfs로 탐색을 하면되는데 먼저 이중for문으로
# 1인 지점을 찾아서 큐에 넣고 visited로 마킹하면된다

rowN, colN = list(map(int, input().split()))
grid = []
for i in range(rowN):
  grid.append(list(map(int, input().split())))

queue = deque()
visited = [[False]*colN for _ in range(rowN)]

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 1:
      queue.append([i,j,0])
      visited[i][j] = True

answer = 0
dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

while len(queue):
  x, y, dist = queue.popleft()
  answer = max(answer, dist)

  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0<=nextY<colN and not visited[nextX][nextY]

    if isValid:
      queue.append([nextX, nextY, dist+1])
      visited[nextX][nextY] = True

print(answer)

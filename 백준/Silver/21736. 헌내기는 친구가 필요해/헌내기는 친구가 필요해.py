# 첫째줄에 rowN, colN이 주어진다
# 둘째줄부터 빈칸없이 그리드가 주어진다
# O는 빈공간, X는 벽, I는 도연, P는 사람
# I는 단하나고 I의 좌표에서 상하좌우를 탐색하면서 bfs탐색을 하면된다
# 만날 수 있는 사람을 수를 출력하고 만약 0이면 TT를 출력한다.

rowN, colN = list(map(int, input().split()))
grid = []
queue = []
visited = [[False] * colN for _ in range(rowN)]

for i in range(rowN):
  grid.append(list(input()))

startX = 0
startY = 0

for i in range(rowN):
  for j in range(colN):
    if grid[i][j] == 'I':
      startX = i
      startY = j

queue.append([startX, startY])
visited[startX][startY] = True

dirs = [[-1,0],[1,0],[0,1], [0,-1]]
answer = 0
while len(queue) > 0:
  x, y = queue.pop(0)
  if grid[x][y] == 'P':
    answer += 1
  
  for dx, dy in dirs:
    nextX = x + dx
    nextY = y + dy
    isValid = 0<=nextX<rowN and 0 <= nextY < colN and grid[nextX][nextY] != 'X' and not visited[nextX][nextY]
    if isValid:
      queue.append([nextX, nextY])
      visited[nextX][nextY] = True

if answer == 0:
  print('TT')
else:
  print(answer)
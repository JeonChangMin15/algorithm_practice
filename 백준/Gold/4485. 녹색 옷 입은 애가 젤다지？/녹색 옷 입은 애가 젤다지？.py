'''
위치에서 상하좌우 탐색해서 현재 금액+ 다음위치금액이 기존보다 작으면 갱신하고
큐에 넣으면 된다
'''

from collections import deque

def bfs(n, order):
  grid = []
  for i in range(n):
    grid.append(list(map(int, input().split())))
  
  cost = [[float('inf')]*n for _ in range(n)]
  cost[0][0] = grid[0][0]

  queue = deque()
  queue.append([0,0,grid[0][0]])
  dirs = [[-1, 0],[1, 0],[0, 1],[0, -1]]

  while len(queue):
    x, y, cur = queue.popleft()

    for dx, dy in dirs:
      nextX = x + dx
      nextY = y + dy
      isValid = 0<=nextX<n and 0<=nextY<n and cur+grid[nextX][nextY] < cost[nextX][nextY]
      if isValid:
        cost[nextX][nextY] = cur + grid[nextX][nextY]
        queue.append([nextX, nextY, cur+grid[nextX][nextY]])

  print(f'Problem {order}: {cost[n-1][n-1]}')



order = 1
while True:
  n = input()
  if len(n) == 1 and int(n) == 0:
    break
  else:
    bfs(int(n), order)
    order += 1
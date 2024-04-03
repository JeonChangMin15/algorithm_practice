n = int(input())
grid = []

for i in range(n):
  grid.append(list(map(int, input().split())))

visited = [[False]*n for _ in range(n)]

queue = [[0,0]]
visited[0][0] = True

isArrive = False

while len(queue):
  x,y = queue.pop(0)

  if grid[x][y] == -1:
    isArrive = True
    print('HaruHaru')
    break
  
  step = grid[x][y]

  if y + step < n and not visited[x][y + step]:
    queue.append([x, y + step])
    visited[x][y + step] = True

  if x + step < n and not visited[x+step][y]:
    queue.append([x + step, y])
    visited[x+step][y] = True

if not isArrive:
  print('Hing')
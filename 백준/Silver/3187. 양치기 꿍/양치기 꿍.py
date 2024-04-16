import sys
sys.setrecursionlimit(10**6)

rowN, colN = list(map(int,input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

visited = [[False]*(colN) for i in range(rowN)]

curSheep = 0
curWolf = 0
totalSheep = 0
totalWolf = 0

def dfs(x, y):
  global curSheep
  global curWolf

  if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == "#" or visited[x][y]:
    return
  
  visited[x][y] = True
  if grid[x][y] == 'v':
    curWolf += 1

  if grid[x][y] =='k':
    curSheep +=1

  dfs(x+1,y)
  dfs(x-1,y)
  dfs(x, y-1)
  dfs(x, y+1)

for i in range(rowN):
  for j in range(colN):
    if visited[i][j] or grid[i][j] == '#':
      continue
    curSheep = 0
    curWolf = 0
    dfs(i, j)
    if curSheep > curWolf:
      totalSheep += curSheep
    else:
      totalWolf += curWolf

print(totalSheep, totalWolf)
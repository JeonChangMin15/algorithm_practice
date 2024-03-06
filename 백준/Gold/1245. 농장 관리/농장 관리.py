rowN, colN = list(map(int, input().split()))
grid = []
for i in range(rowN):
  grid.append(list(map(int, input().split())))

vistied = [[False]*colN for _ in range(rowN)]

isHightArea = True
dirs = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]

def dfs(x,y,height):
  global isHightArea
  if x < 0 or x >= rowN or y <0 or y>=colN:
    return
  if grid[x][y] > height:
    isHightArea = False
    return
  if grid[x][y] < height or vistied[x][y]:
    return
  
  vistied[x][y] = True
  for dx, dy in dirs:
    dfs(x+dx, y+dy, height)

answer = 0

for i in range(rowN):
  for j in range(colN):
    if vistied[i][j]:
      continue
    isHightArea = True
    dfs(i, j, grid[i][j])
    if isHightArea:
      answer +=1

print(answer)
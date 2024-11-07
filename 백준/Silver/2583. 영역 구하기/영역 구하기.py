import sys
sys.setrecursionlimit(10**5)

rowN, colN, rectN = list(map(int, input().split()))
arr = []

for i in range(rectN):
  arr.append(list(map(int, input().split())))

visited = [[False]*colN for _ in range(rowN)]

def isNotInclude(x, y):

  for sy, sx, ey, ex in arr:
    if sx<=x<ex and sy<=y<ey:
      return False

  return True

def dfs(x, y):
  if x < 0 or x >= rowN or y < 0 or y >= colN or visited[x][y] or not isNotInclude(x,y):
    return 0

  visited[x][y] = True
  up = dfs(x-1, y)
  down = dfs(x+1,y)
  left = dfs(x,y-1)
  right = dfs(x,y+1)

  return 1 + up + down + left + right

answer = []

for i in range(rowN):
  for j in range(colN):
    if not visited[i][j] and isNotInclude(i, j):
      answer.append(dfs(i, j))

answer.sort()
print(len(answer))
print(" ".join(list(map(str, answer))))
rowN, colN, dist = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

visited = [[False]*colN for _ in range(rowN)]
answer = 0

def dfs(x, y, curLen):
  global answer

  if x < 0 or x>=rowN or y < 0 or y>=colN or grid[x][y]=='T' or visited[x][y]:
    return

  if x == 0 and y == colN -1 and curLen == dist:
    answer += 1
    return

  visited[x][y] = True
  dfs(x-1, y, curLen+1)
  dfs(x+1, y, curLen+1)
  dfs(x, y-1, curLen+1)
  dfs(x, y+1, curLen+1)
  visited[x][y] = False

dfs(rowN-1, 0, 1)

print(answer)
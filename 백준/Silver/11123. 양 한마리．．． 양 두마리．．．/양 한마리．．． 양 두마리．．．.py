import sys
sys.setrecursionlimit(10**5)

n = int(input())

def solution():
  rowN, colN = list(map(int, input().split()))
  grid = []

  for i in range(rowN):
    grid.append(list(input()))

  def dfs(x, y):
    if x < 0 or x >= rowN or y < 0 or y >= colN or grid[x][y] == '.':
      return

    grid[x][y] = '.'
    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y -1)
    dfs(x, y + 1)

  answer = 0

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] =='#':
        answer += 1
        dfs(i, j)

  print(answer)
  

for i in range(n):
  solution()
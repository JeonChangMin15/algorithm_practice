import sys
sys.setrecursionlimit(100000)


# colN, rowN이 주어진다
# 둘 다 0 0이면 끝난다
# 상하좌우 대각선으로 탐색이 가능하고
# 섬의 갯수를 구해야된다. 각 케이스마다 1이면 카운팅하고
# 방문한곳은 0으로 바꾸면된다

dirs = [[-1, 0], [1, 0], [0, -1], [0,1], [-1,1], [-1, -1], [1, -1], [1, 1]]

def dfs (x, y, rowN, colN, grid):
  if x <0 or x>=rowN or y<0 or y>=colN or grid[x][y] == 0:
    return
  grid[x][y] = 0

  for dx, dy in dirs:
    dfs(x + dx, y+dy, rowN, colN, grid)

def solution(colN, rowN):
  answer = 0
  grid = []

  for _ in range(rowN):
    grid.append(list(map(int, input().split())))

  for i in range(rowN):
    for j in range(colN):
      if grid[i][j] == 1:
        dfs(i, j, rowN, colN, grid)
        answer += 1

  print(answer)
  return

while True:
  colN, rowN = list(map(int, input().split()))
  if colN == 0 and rowN == 0:
    break
  
  solution(colN, rowN)

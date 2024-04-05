rowN, colN, dist = list(map(int, input().split()))
grid = []

for i in range(rowN):
  grid.append(list(input()))

answer = 0
visited = [[False]*(colN) for i in range(rowN)]

def dfs(row, col, depth):
  global answer
  if (row < 0 or 
      row >= rowN or 
      col < 0 or 
      col >= colN or 
      visited[row][col] or 
      grid[row][col] == 'T'):
    return
  
  if row == 0 and col == colN-1 and depth == dist:
    answer += 1
    return

  visited[row][col] = True
  dfs(row+1, col, depth+1)
  dfs(row-1, col, depth+1)
  dfs(row, col+1, depth+1)
  dfs(row, col-1, depth+1)
  visited[row][col] = False

dfs(rowN-1, 0, 1)

print(answer)
n, caseN = list(map(int, input().split()))
grid = []
arr = []

for i in range(n):
  grid.append(list(map(int, input().split())))

for i in range(caseN):
  arr.append(list(map(int, input().split())))


for k in range(n):
  for i in range(n):
    for j in range(n):
      if grid[i][j] > grid[i][k] + grid[k][j]:
        grid[i][j] = grid[i][k] + grid[k][j]

answer = []

for i in range(caseN):
  start, end, time = arr[i]
  if grid[start-1][end-1] <= time:
    answer.append('Enjoy other party')
  else:
    answer.append('Stay here')

print("\n".join(answer))

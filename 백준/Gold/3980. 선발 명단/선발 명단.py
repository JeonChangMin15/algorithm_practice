caseN = int(input())
answer = 0

def backtracking(arr, grid):
  global answer
  if len(arr) == 11:
    point = 0
    for i in range(11):
      person = arr[i]
      point += grid[person][i]

    answer = max(point, answer)
    return

  for i in range(11):
    position = len(arr)

    if grid[i][position] > 0 and i not in arr:
      arr.append(i)
      backtracking(arr, grid)
      arr.pop()

for i in range(caseN):
  grid = []
  answer = 0
  for _ in range(11):
    grid.append(list(map(int, input().split())))

  backtracking([], grid)
  print(answer)
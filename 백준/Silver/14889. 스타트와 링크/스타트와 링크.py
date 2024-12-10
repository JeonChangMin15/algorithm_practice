peopleN = int(input())
grid = []

for i in range(peopleN):
  grid.append(list(map(int, input().split())))

peopleArr = []

for i in range(peopleN):
  peopleArr.append(i)

answer = float('inf')

def dfs(arr, start):
  global answer

  if len(arr) == peopleN/2:
    arr2 = list(filter(lambda x : x not in arr, peopleArr))
    team1 = 0
    team2 = 0
    for i in range(len(arr)-1):
      for j in range(i+1, len(arr)):
        team1 += grid[arr[i]][arr[j]] + grid[arr[j]][arr[i]]

    for i in range(len(arr)-1):
      for j in range(i+1, len(arr)):
        team2 += grid[arr2[i]][arr2[j]] + grid[arr2[j]][arr2[i]]

    answer = min(abs(team1 - team2), answer)
    return

  for i in range(start, peopleN):
    arr.append(i)
    dfs(arr, i+1)
    arr.pop()

dfs([], 0)

print(answer)
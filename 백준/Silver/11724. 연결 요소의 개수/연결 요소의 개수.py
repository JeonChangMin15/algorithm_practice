cityN, lineN = list(map(int, input().split()))
grid = [[] for _ in range(cityN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  grid[n1].append(n2)
  grid[n2].append(n1)

visited = [False]*(cityN+1)

def dfs(node):
  visited[node] = True

  for nextNode in grid[node]:
    if visited[nextNode]:
      continue
    dfs(nextNode)

answer = 0

for i in range(1, cityN+1):
  if visited[i]:
    continue
  answer += 1
  dfs(i)

print(answer)
computerN = int(input())
lineN = int(input())
grid = [[] for _ in range(computerN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  grid[n1].append(n2)
  grid[n2].append(n1)

visited = [False]*(computerN+1)

def dfs(curNode):
  visited[curNode] = True

  for nextNode in grid[curNode]:
    if not visited[nextNode]:
      dfs(nextNode)

dfs(1)

print(len(list(filter(lambda x: x ==True, visited)))-1)
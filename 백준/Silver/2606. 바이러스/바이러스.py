computerN = int(input()) 
lineN = int(input())
graph = {}

for i in range(computerN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

visited = [False]*(computerN+1)

def dfs(node):
  visited[node] = True

  for nextNode in graph[node]:
    if visited[nextNode]:
      continue
    dfs(nextNode)

dfs(1)

print(len(list(filter(lambda x: x == True, visited)))-1)
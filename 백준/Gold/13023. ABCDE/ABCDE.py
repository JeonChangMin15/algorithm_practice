nodeN, lineN = list(map(int, input().split()))

graph = [[] for _ in range(nodeN)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

visited = [False]* nodeN
isFourthStep = False

def dfs(curNode, step):
  global isFourthStep
  if step == 4:
    isFourthStep = True
    return

  visited[curNode] = True

  for nextNode in graph[curNode]:
    if not visited[nextNode]:
      dfs(nextNode, step + 1)

  visited[curNode] = False

for i in range(nodeN):
  if not isFourthStep:
    dfs(i, 0)

print(1 if isFourthStep else 0)
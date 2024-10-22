import sys
sys.setrecursionlimit(100000)

nodeN, lineN = list(map(int, input().split()))
graph = [[] for _ in range(nodeN + 1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n2].append(n1)

startNode = int(input())

visited = [False]*(nodeN+1)

def dfs(curNode):
  if visited[curNode]:
    return

  visited[curNode] = True

  for nextNode in graph[curNode]:
    dfs(nextNode)

dfs(startNode)

answer = 0

for v in visited:
  if v:
    answer += 1

print(answer - 1)
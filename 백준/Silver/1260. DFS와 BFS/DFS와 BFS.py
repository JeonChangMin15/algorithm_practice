from collections import deque

nodeN, lineN, startN = list(map(int, input().split()))
graph = {}

for i in range(1, nodeN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

for i in range(1, nodeN+1):
  graph[i].sort()

dfsVisited = [False]*(nodeN+1)
dfsArr = []

def dfs(curNode):
  dfsVisited[curNode] = True
  dfsArr.append(curNode)

  for nextNode in graph[curNode]:
    if dfsVisited[nextNode]:
      continue
    dfs(nextNode)

dfs(startN)
print(" ".join(list(map(str, dfsArr))))

def bfs(startNode):
  bfsVisited = [False]*(nodeN+1)
  bfsArr = [startNode]
  queue = deque()
  queue.append(startNode)
  bfsVisited[startNode] = True

  while len(queue):
    curNode = queue.popleft()

    for nextNode in graph[curNode]:
      if bfsVisited[nextNode]:
        continue
      bfsArr.append(nextNode)
      bfsVisited[nextNode] = True
      queue.append(nextNode)

  print(" ".join(list(map(str, bfsArr))))

bfs(startN)



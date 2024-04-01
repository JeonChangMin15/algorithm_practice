from collections import deque

nodeN, linkN, startNode = list(map(int, input().split()))
graph = {}

for i in range(1, nodeN+1):
  graph[i]=[]

for i in range(linkN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

for i in range(1, nodeN+1):
  graph[i].sort()

dist = 1
visited = [False]*(nodeN + 1)
nodeDist = [0]*(nodeN + 1)
visited[startNode] = True
nodeDist[startNode] = 1

queue = deque()
queue.append(startNode)

while len(queue):
  currentNode = queue.popleft()

  for nextNode in graph[currentNode]:
    if visited[nextNode]:
      continue

    visited[nextNode] = True
    nodeDist[nextNode] = dist + 1
    queue.append(nextNode)
    dist += 1

answer = "\n".join(list(map(str, nodeDist[1:])))

print(answer)
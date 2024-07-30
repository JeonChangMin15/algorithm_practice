from collections import deque

nodeN, lineN = list(map(int, input().split()))
startNode, endNode = list(map(int, input().split()))
graph = {}

for i in range(1, nodeN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

queue = deque()
queue.append([startNode, 0])

visited = [False]*(nodeN+1)
visited[startNode] = True

answer = 0

while len(queue):
  curNode, curTime = queue.popleft()
  if curNode == endNode:
    answer = curTime
    break

  if curNode-1>=1 and not visited[curNode-1]:
    visited[curNode-1] = True
    queue.append([curNode-1, curTime+1])

  if curNode+1<=nodeN and not visited[curNode+1]:
    visited[curNode+1] = True
    queue.append([curNode+1, curTime+1])

  for nextNode in graph[curNode]:
    if visited[nextNode]:
      continue
    visited[nextNode] = True
    queue.append([nextNode, curTime+1])

print(answer)
from collections import deque

startNode, endNode = list(map(int, input().split()))
nodeN, lineN = list(map(int, input().split()))
graph = {}

for i in range(1, nodeN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

queue = deque()
queue.append([startNode, 0])
visited = [False]*(nodeN + 1)
visited[startNode] = True

answer = -1

while len(queue):
  curNode, cnt = queue.popleft()

  if curNode == endNode:
    answer = cnt
    break

  for nextNode in graph[curNode]:
    if visited[nextNode]:
      continue

    queue.append([nextNode, cnt + 1])
    visited[nextNode] = True

print(answer)
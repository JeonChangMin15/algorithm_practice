from collections import deque

n, lineN = list(map(int, input().split()))
start, end = list(map(int, input().split()))

graph = [[] for _ in range(n+1)]

for _ in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

visited = [False]*(n+1)
visited[start] = 0
queue = deque()
queue.append([start, 0])

while len(queue):
  curNode, curTime = queue.popleft()
  if curNode == end:
    print(curTime)
    break

  if curNode-1>=1 and not visited[curNode-1]:
    visited[curNode-1] = True
    queue.append([curNode-1, curTime+1])

  if curNode+1 <= n and not visited[curNode+1]:
    visited[curNode+1] = True
    queue.append([curNode+1, curTime+1])

  for nextNode in graph[curNode]:
    if not visited[nextNode]:
      visited[nextNode] = True
      queue.append([nextNode, curTime+1])
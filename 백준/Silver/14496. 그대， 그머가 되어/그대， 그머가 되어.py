from collections import deque

start, end = list(map(int, input().split()))
n, lineN = list(map(int, input().split()))

graph = [[] for _ in range(n+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

visited = [False]*(n+1)
visited[start] = True

queue = deque()
queue.append([start, 0])
answer = -1

while len(queue):
  node, cnt = queue.popleft()
  if node == end:
    answer = cnt
    break

  for nextNode in graph[node]:
    if visited[nextNode]:
      continue
    queue.append([nextNode, cnt+1])
    visited[nextNode] = True

print(answer)
from collections import deque

start, end = list(map(int, input().split()))
nodeN, lineN = list(map(int, input().split()))
graph = [[] for _ in range(nodeN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

queue = deque()
queue.append([start, 0])
vistied = [False]*(nodeN+1)
vistied[start] = True

answer = -1

while len(queue):
  node, cnt = queue.popleft()
  if node == end:
    answer = cnt
    break

  for nextNode in graph[node]:
    if not vistied[nextNode]:
      queue.append([nextNode, cnt + 1])
      vistied[nextNode] = True

print(answer)
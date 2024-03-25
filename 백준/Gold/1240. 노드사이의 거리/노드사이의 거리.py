from collections import deque

nodeN, sampleN = list(map(int, input().split()))
graph  = {}
samples = []

for i in range(1, nodeN + 1):
  graph[i] = []

for i in range(nodeN - 1):
  start,end,dist = list(map(int, input().split()))
  graph[start].append([end, dist])
  graph[end].append([start, dist])

for i in range(sampleN):
  n1, n2 = list(map(int, input().split()))
  samples.append([n1, n2])

def bfs(start, end):
  value = 0
  queue = deque()
  queue.append([start, 0])
  visited = [False]*(nodeN + 1)
  visited[start] = True

  while len(queue):
    currentNode, dist = queue.popleft()
    if currentNode == end:
      value = dist
      break

    for nextNode, nextDist in graph[currentNode]:
      if not visited[nextNode]:
        queue.append([nextNode, dist + nextDist])
        visited[nextNode] = True

  return value

answer = []

for start, end in samples:
  answer.append(bfs(start, end))

print('\n'.join(list(map(str, answer))))

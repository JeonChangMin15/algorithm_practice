import heapq

nodeN, lineN = list(map(int, input().split()))
check = list(map(int, input().split()))
check[nodeN-1] = 0

graph = [[] for _ in range(nodeN)]

for i in range(lineN):
  n1, n2, t = list(map(int, input().split()))
  graph[n1].append([n2, t])
  graph[n2].append([n1, t])

dist = [float('inf')]*nodeN
dist[0] = 0

queue = []
heapq.heappush(queue, [0,0])

while len(queue):
  curNode, t = heapq.heappop(queue)

  if dist[curNode] < t:
    continue

  for nextNode, t2 in graph[curNode]:
    totalT = t + t2
    if totalT < dist[nextNode] and check[nextNode] == 0:
      heapq.heappush(queue, [nextNode, totalT])
      dist[nextNode] = totalT

print(dist[nodeN-1] if dist[nodeN-1] != float('inf') else -1)
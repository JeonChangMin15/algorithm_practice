import heapq

nodeN, lineN = list(map(int,input().split()))
startNode = int(input())

graph = [[] for _ in range(nodeN+1)]

for _ in range(lineN):
  s, e, d = list(map(int,input().split()))
  graph[s].append([e, d])

dist = [float('inf')]*(nodeN+1)
dist[startNode] = 0

queue = []
heapq.heappush(queue, [0, startNode])

while len(queue):
  d, curNode = heapq.heappop(queue)

  if dist[curNode] < d:
    continue

  for nextNode, nextDist in graph[curNode]:
    if d + nextDist < dist[nextNode]:
      heapq.heappush(queue, [d+nextDist, nextNode])
      dist[nextNode] = d + nextDist

for i in range(nodeN+1):
  if dist[i] == float('inf'):
    dist[i] = 'INF'
    
print("\n".join(map(str, dist[1:])))
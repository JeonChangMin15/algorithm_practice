import heapq

cityN, lineN = list(map(int, input().split()))
startN = int(input())
graph = {}

for i in range(1, cityN+1):
  graph[i] = []

for i in range(lineN):
  u,v,w = list(map(int, input().split()))
  graph[u].append([w, v])

queue = []
heapq.heappush(queue, [0, startN])

dist = [float('inf')]*(cityN+1)
dist[startN] = 0

while len(queue):
  curDist, curCity = heapq.heappop(queue)
  if curDist > dist[curCity]:
    continue

  for nextDist, nextCity in graph[curCity]:
    if nextDist + curDist > dist[nextCity]:
      continue
    dist[nextCity] = nextDist + curDist
    heapq.heappush(queue, [nextDist + curDist, nextCity])

for i in range(1, cityN+1):
  if dist[i] == float('inf'):
    dist[i] = 'INF'

print("\n".join(list(map(str, dist[1:]))))
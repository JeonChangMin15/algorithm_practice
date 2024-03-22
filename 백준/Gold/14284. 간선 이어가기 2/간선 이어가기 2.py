import heapq

nodeN, lineN = list(map(int, input().split()))

graph = [[] for _ in range(nodeN+1)]

for _ in range(lineN):
  start, end, dist = list(map(int, input().split()))
  graph[start].append([end, dist])
  graph[end].append([start, dist])

startNode, endNode = list(map(int, input().split()))

visited = [float('inf')]*(nodeN + 1)
visited[startNode] = 0

queue = []
heapq.heappush(queue, [0, startNode])

while len(queue):
  currentDist, currentNode = heapq.heappop(queue)

  if currentDist > visited[currentNode]:
    continue

  for nextCity, nextDist in graph[currentNode]:
    if visited[nextCity] > currentDist + nextDist:
      heapq.heappush(queue, [currentDist + nextDist, nextCity])
      visited[nextCity] = currentDist + nextDist

print(visited[endNode])
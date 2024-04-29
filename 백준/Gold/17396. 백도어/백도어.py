import heapq

cityN, lineN = list(map(int, input().split()))
graph = {}

for i in range(cityN):
  graph[i] = []

canVisited = list(map(int, input().split()))
canVisited[-1] = 0

for i in range(lineN):
  n1, n2, dist = list(map(int, input().split()))
  graph[n1].append([dist, n2])
  graph[n2].append([dist, n1])

queue = []
cityDist = [float('inf')] * cityN
cityDist[0] = 0

heapq.heappush(queue, [0, 0])

while len(queue):
  curDist, curCity = heapq.heappop(queue)
  if curDist > cityDist[curCity]:
    continue

  for nextDist, nextCity in graph[curCity]:
    if canVisited[nextCity] == 0 and curDist + nextDist < cityDist[nextCity]:
      heapq.heappush(queue, [curDist + nextDist, nextCity])
      cityDist[nextCity] = curDist + nextDist

print(cityDist[-1] if cityDist[-1] != float('inf') else - 1)
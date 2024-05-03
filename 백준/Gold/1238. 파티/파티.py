import heapq

cityN, lineN, endCity = list(map(int,input().split()))
graph = {}

for i in range(1, cityN + 1):
  graph[i] = []

for i in range(lineN):
  start, end, dist = list(map(int, input().split()))
  graph[start].append([dist, end])

def findLeastDist(start, end):
  cityDist = [float('inf')]*(cityN + 1)
  cityDist[start] = 0
  queue = []
  heapq.heappush(queue, [0, start])

  while len(queue):
    curDist, curCity = heapq.heappop(queue)
    if curDist > cityDist[curCity]:
      continue

    for nextDist, nextCity in graph[curCity]:
      totalDist = curDist + nextDist
      if totalDist < cityDist[nextCity]:
        heapq.heappush(queue, [totalDist, nextCity])
        cityDist[nextCity] = totalDist

  return cityDist[end]

max_val = 0

for i in range(1, cityN + 1):
  totalDist = findLeastDist(i, endCity) + findLeastDist(endCity, i)
  max_val = max(max_val, totalDist)

print(max_val)
import heapq

cityN = int(input())
busN = int(input())
graph = {}
for i in range(1, cityN+1):
  graph[i] = []

for i in range(busN):
  start, end, cost = list(map(int, input().split()))
  graph[start].append([end, cost])

startCity, endCity = list(map(int, input().split()))

visitedCost = [float('inf')]*(cityN+1)
queue = [(startCity, 0)]


while len(queue):
  currentCity, currentCost = heapq.heappop(queue)
  if visitedCost[currentCity] < currentCost:
    continue

  for nextCity, nextCost in graph[currentCity]:
    totalCost = currentCost + nextCost

    if visitedCost[nextCity] > totalCost:
      heapq.heappush(queue, (nextCity, totalCost))
      visitedCost[nextCity] = totalCost

print(visitedCost[endCity])


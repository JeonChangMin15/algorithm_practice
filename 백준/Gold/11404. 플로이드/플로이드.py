import heapq

cityN = int(input())
lineN = int(input())
graph = {}

for i in range(1, cityN+1):
  graph[i] = []

for i in range(lineN):
  start, end, cost = list(map(int, input().split()))
  graph[start].append([cost, end])

def findListCost(startCity):
  cityCost = [float("inf")]*(cityN + 1)
  cityCost[startCity] = 0
  queue = []
  heapq.heappush(queue, [0, startCity])

  while len(queue):
    curCost, curCity = heapq.heappop(queue)
    if curCost > cityCost[curCity]:
      continue

    for nextCost, nextCity in graph[curCity]:
      totalCost = nextCost + curCost
      if totalCost < cityCost[nextCity]:
        heapq.heappush(queue, [totalCost, nextCity])
        cityCost[nextCity] = totalCost

  for i in range(1, cityN +1):
    if cityCost[i] == float("inf"):
      cityCost[i] = 0
  
  return cityCost[1:]

for i in range(1, cityN+1):
  costs = findListCost(i)
  print(" ".join(list(map(str, costs))))
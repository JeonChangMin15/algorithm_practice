import heapq

houseN, roadN = list(map(int, input().split()))
grid = [[] for _ in range(houseN+1)]

for _ in range(roadN):
  first, second, dist = list(map(int, input().split()))
  grid[first].append([second, dist])
  grid[second].append([first, dist])

distance = [float('inf')] * (houseN + 1)
distance[1] = 0
queue = []
heapq.heappush(queue, [0, 1])

while len(queue):
  prevDist, current = heapq.heappop(queue)

  if distance[current] < prevDist:
    continue

  for nextHouse, dist in grid[current]:
    if(prevDist + dist < distance[nextHouse]):
      distance[nextHouse] = prevDist + dist
      heapq.heappush(queue, [dist + prevDist, nextHouse])

print(distance[houseN])
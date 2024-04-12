from collections import deque

cityN, roadN = list(map(int, input().split()))
graph = {}

for i in range(1, cityN + 1):
  graph[i] = []

for i in range(roadN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

chickenCity = []

def dfs(arr: list, start):
  if len(arr) == 2:
    chickenCity.append(arr[:])
    return

  for i in range(start, cityN+1):
    arr.append(i)
    dfs(arr, i +1)
    arr.pop()

dfs([], 1)

totalLength = float('inf')
cityComb = ""

def bfs(city1, city2):
  visited = [False]*(cityN + 1)
  distToChicken = [0]*(cityN + 1)
  queue = deque()
  queue.append([city1, 0])
  queue.append([city2, 0])

  visited[city1] = True
  visited[city2] = True

  while len(queue):
    currentCity, dist = queue.popleft()
    distToChicken[currentCity] = dist * 2

    for nextCity in graph[currentCity]:
      if visited[nextCity]:
        continue

      queue.append([nextCity, dist + 1])
      visited[nextCity] = True

  return sum(distToChicken)

for c1, c2 in chickenCity:
  value = bfs(c1, c2)

  if value < totalLength:
    totalLength = value
    cityComb = str(c1) + " " + str(c2)

print(cityComb, totalLength)
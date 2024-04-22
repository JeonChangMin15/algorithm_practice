import heapq

cityN, lineN = list(map(int, input().split()))
start = int(input())

graph = {}

for i in range(1, cityN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2, dist = list(map(int, input().split()))
  graph[n1].append([dist, n2])

cityDist = [float('inf')] * (cityN + 1)
cityDist[start] = 0
queue = []
heapq.heappush(queue, [0, start])

while len(queue):
  curDist, curCity = heapq.heappop(queue)

  if curDist > cityDist[curCity]:
    continue

  for d, c in graph[curCity]:
    if d + curDist < cityDist[c]:
      heapq.heappush(queue,[d + curDist, c])
      cityDist[c] = d + curDist

cityDist.pop(0)

for i in range(len(cityDist)):
  if cityDist[i] == float('inf'):
    cityDist[i] = "INF"


answer = "\n".join(list(map(str, cityDist)))

print(answer)

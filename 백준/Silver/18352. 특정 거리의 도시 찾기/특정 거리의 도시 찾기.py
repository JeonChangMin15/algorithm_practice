import heapq

cityN, lineN, minDist, startN = list(map(int, input().split()))
graph = [[] for _ in range(cityN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)

cityDist = [float('inf')] * (cityN+1)
cityDist[startN] = 0

queue = []
heapq.heappush(queue, [0, startN])

while len(queue):
  curDist, curCity = heapq.heappop(queue)
  if curDist > cityDist[curCity]:
    continue

  for nextCity in graph[curCity]:
    nextDist = curDist + 1
    if nextDist >= cityDist[nextCity]:
      continue
    heapq.heappush(queue, [nextDist, nextCity])
    cityDist[nextCity] = nextDist

answer = []

for i in range(cityN+1):
  if cityDist[i] == minDist:
    answer.append(i)

print("\n".join(list(map(str, answer))) if len(answer) else -1)
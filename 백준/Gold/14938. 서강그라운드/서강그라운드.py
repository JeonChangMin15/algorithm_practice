
import heapq

cityN, maxLen, lineN = list(map(int, input().split()))
items = [0] + list(map(int, input().split()))
graph = {}

for i in range(1, cityN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2, dist = list(map(int,input().split()))
  graph[n1].append([dist, n2])
  graph[n2].append([dist, n1])

def findItem(start):
  cityDist = [float('inf')]*(cityN+1)
  cityDist[start] = 0

  item_cnt = 0

  visited = [False] * (cityN + 1)

  queue = []
  heapq.heappush(queue, [0, start])

  while len(queue):
    curDist, curCity = heapq.heappop(queue)
    if curDist > cityDist[curCity]:
      continue

    if not visited[curCity]:
      item_cnt += items[curCity]
      visited[curCity] = True

    for nextDist, nextCity in graph[curCity]:
      totalDist = curDist + nextDist
      if totalDist < cityDist[nextCity] and totalDist <= maxLen:
        heapq.heappush(queue, [totalDist, nextCity])
        cityDist[nextCity] = totalDist

  return item_cnt

answer = 0

for i in range(1, cityN+1):
  cnt = findItem(i)
  answer = max(answer, cnt)

print(answer)

import heapq

computerN = int(input())
lineN = int(input())
graph = {}

for i in range(1, computerN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2, dist = list(map(int, input().split()))
  if n1 == n2:
    continue
  graph[n1].append([dist, n2])
  graph[n2].append([dist, n1])

queue = []
heapq.heappush(queue, [0, 1])
visited = [False] * (computerN + 1)

answer = 0

while len(queue):
  length, cur = heapq.heappop(queue)

  if visited[cur]:
    continue

  visited[cur] = True
  answer += length

  for nextDist, nextCom in graph[cur]:
    if visited[nextCom]:
      continue
    heapq.heappush(queue, [nextDist, nextCom])

print(answer)
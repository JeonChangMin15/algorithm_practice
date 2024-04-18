import heapq

nodeN, lineN = list(map(int, input().split()))
graph = {}

for i in range(1, nodeN+1):
  graph[i] = []

for i in range(lineN):
  n1, n2, dist = list(map(int, input().split()))
  graph[n1].append([dist, n2])
  graph[n2].append([dist, n1])

queue = []
heapq.heappush(queue, [0,1])

visited = [False] * (nodeN + 1)

city = 0
answer = 0

while len(queue):
  w, v = heapq.heappop(queue)
  if not visited[v]:
    visited[v] = True
    answer += w
    for i in graph[v]:
      heapq.heappush(queue, i)

print(answer)
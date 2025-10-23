from collections import deque

cityN, lineN, targetLength, startCity = list(map(int,input().split()))
dist = [float('inf')]*(cityN+1)
dist[startCity] = 0

graph = [[] for _ in range(cityN+1)]

for _ in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)

queue = deque()
queue.append([startCity, 0])

while len(queue):
  curCity, d = queue.popleft()

  for nextCity in graph[curCity]:
    if d+1 < dist[nextCity]:
      queue.append([nextCity, d+1])
      dist[nextCity] = d + 1

answer = []

for i in range(1, cityN+1):
  if dist[i] == targetLength:
    answer.append(str(i))

print("\n".join(answer) if len(answer) > 0 else -1)
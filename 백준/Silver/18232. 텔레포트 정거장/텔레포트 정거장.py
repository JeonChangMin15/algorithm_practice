from collections import deque

cityN, lineN = list(map(int, input().split()))
startCity, endCity = list(map(int, input().split()))
graph = [[] for _ in range(cityN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

queue = deque()
visited = [False]*(cityN+1)
visited[startCity] = True
queue.append([startCity, 0])

while len(queue):
  curCity, curTime = queue.popleft()

  if curCity == endCity:
    print(curTime)
    break

  if curCity-1>=1 and not visited[curCity-1]:
    visited[curCity-1] = True
    queue.append([curCity-1, curTime+1])

  if curCity+1<=cityN and not visited[curCity+1]:
    visited[curCity+1] = True
    queue.append([curCity+1, curTime+1])

  for nextCity in graph[curCity]:
    if not visited[nextCity]:
      queue.append([nextCity, curTime+1])
      visited[nextCity] = True

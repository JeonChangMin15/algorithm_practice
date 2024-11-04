from collections import deque

houseN, lineN = list(map(int, input().split()))
graph = [[] for _ in range(houseN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

dist = [float('inf')]*(houseN+1)
dist[1] = 0
dist[0] = 0

queue = deque()
queue.append([1, 0])

while len(queue):
  curHouse, curDist = queue.popleft()

  for nextHouse in graph[curHouse]:
    if curDist +1 < dist[nextHouse]:
      dist[nextHouse] = curDist + 1
      queue.append([nextHouse, curDist + 1])

maxDist = max(dist)
arr = []

for i in range(1, houseN+1):
  if dist[i] == maxDist:
    arr.append(i)

print(arr[0], maxDist, len(arr))
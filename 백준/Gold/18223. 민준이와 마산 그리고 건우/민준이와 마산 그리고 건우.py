import heapq

pointN, lineN, stopOver = list(map(int, input().split()))
graph = {}
for i in range(1, pointN+1):
  graph[i] = []

for i in range(lineN):
  n1,n2,dist = map(int, input().split())
  graph[n1].append([dist, n2])
  graph[n2].append([dist, n1])

def dikstra(start ,end):
  point_dist = [float('inf')]*(pointN+1)
  point_dist[start] = 0
  queue = []
  heapq.heappush(queue, [0, start])

  while len(queue):
    cur_dist, cur_point = heapq.heappop(queue)
    if cur_dist > point_dist[cur_point]:
      continue

    for next_dist, next_point in graph[cur_point]:
      sum_dist = cur_dist+next_dist
      if sum_dist < point_dist[next_point]:
        heapq.heappush(queue, [sum_dist, next_point])
        point_dist[next_point] = sum_dist

  return point_dist[end]

stopOver_dist = dikstra(1, stopOver) + dikstra(stopOver, pointN)
direct_dist = dikstra(1, pointN)

if stopOver_dist == direct_dist:
  print("SAVE HIM")
else:
  print("GOOD BYE")
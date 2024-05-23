import heapq

def prim(cityN, lineN):
  graph = {}
  for i in range(cityN):
    graph[i] = []
  
  total_length = 0

  for i in range(lineN):
    n1, n2, dist = list(map(int, input().split()))
    graph[n1].append([dist, n2])
    graph[n2].append([dist, n1])
    total_length += dist

  queue = []
  visited = [False] * cityN
  use_length = 0

  heapq.heappush(queue, [0, 0])

  while len(queue):
    cur_dist, cur_city = heapq.heappop(queue)

    if visited[cur_city]:
      continue

    visited[cur_city] = True
    use_length += cur_dist

    for next_dist, next_city in graph[cur_city]:
      if not visited[next_city]:
        heapq.heappush(queue, [next_dist, next_city])

  print(total_length - use_length)

while True:
  n1, n2 = list(map(int, input().split()))
  if n1 == 0 and n2 == 0:
    break
  else:
    prim(n1, n2)
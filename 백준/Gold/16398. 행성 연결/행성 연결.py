import heapq

n = int(input())
grid = []

for i in range(n):
  grid.append(list(map(int, input().split())))

route = {}

for i in range(n):
  route[i] = []

for i in range(n):
  for j in range(n):
    if i != j:
      route[i].append([grid[i][j], j])

visited = [False]*n
queue = []
heapq.heappush(queue, [0,0])
total_dist = 0

while len(queue):
  cur_dist, cur_city = heapq.heappop(queue)

  if visited[cur_city]:
    continue

  visited[cur_city] = True
  total_dist += cur_dist

  for next_dist, next_city in route[cur_city]:
    if visited[next_city]:
      continue
    heapq.heappush(queue, [next_dist, next_city])

print(total_dist)
from collections import deque

peopleN = int(input())
start, end = list(map(int, input().split()))
lineN = int(input())
graph = [[] for _ in range(peopleN+1)]

for i in range(lineN):
  x, y = list(map(int, input().split()))
  graph[x].append(y)
  graph[y].append(x)

visited = [False]*(peopleN+1)
visited[start] = True
queue = deque()
queue.append([start, 0])

answer = -1

while len(queue):
  curPerson, dist = queue.popleft()

  if curPerson == end:
    answer = dist
    break

  for nextPerson in graph[curPerson]:
    if not visited[nextPerson]:
      visited[nextPerson] = True
      queue.append([nextPerson, dist+1])

print(answer)
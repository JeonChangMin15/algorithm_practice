from collections import deque

total, start, end, up, down = list(map(int, input().split()))
visited = [False]*(total+1)
visited[start] = True

queue = deque()
queue.append([start, 0])

answer = 'use the stairs'
while len(queue):
  current, cnt = queue.popleft()
  if current == end:
    print(cnt)
    answer = cnt
    break

  if current+up <=total and not visited[current+up]:
    queue.append([current+up, cnt+1])
    visited[current+up] = True

  if current-down >=1 and not visited[current-down]:
    queue.append([current-down, cnt+1])
    visited[current-down] = True

if answer == 'use the stairs':
  print('use the stairs')
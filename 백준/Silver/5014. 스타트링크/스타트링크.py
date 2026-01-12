from collections import deque

maxFloor, start, end, up, down = list(map(int, input().split()))
queue = deque()
queue.append([start, 0])

visited = [False]*(maxFloor+1)
answer = 'use the stairs'

while len(queue):
  pos, cnt = queue.popleft()
  if pos == end:
    answer = cnt
    break

  if pos+up <=maxFloor and not visited[pos+up]:
    visited[pos+up] = True
    queue.append([pos+up, cnt+1])

  if pos-down >= 1 and not visited[pos-down]:
    visited[pos-down] = True
    queue.append([pos-down, cnt+1])

print(answer)
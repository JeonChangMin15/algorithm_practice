from collections import deque

start, end = list(map(int, input().split()))
queue = deque()
queue.append([start, 0])
maxPos = 100000
visited = [False]*100001
visited[start] = True

while len(queue):
  pos, time = queue.popleft()

  if pos == end:
    print(time)
    break

  if pos*2 <= maxPos and not visited[pos*2]:
    visited[pos*2] = True
    queue.append([pos*2, time])

  if pos-1 >= 0 and not visited[pos-1]:
    visited[pos-1] = True
    queue.append([pos-1, time + 1])

  if pos+1 <= maxPos and not visited[pos+1]:
    visited[pos+1] = True
    queue.append([pos+1, time+1])

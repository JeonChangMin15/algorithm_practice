from collections import deque

start, end = list(map(int, input().split()))

queue = deque()
queue.append([start, 0])
visited = [False]*100001
visited[start] = True

while len(queue):
  position, time = queue.popleft()
  if position == end:
    print(time)
    break

  if position*2 <= 100000 and not visited[position*2]:
    queue.append([position*2, time])
    visited[position*2] = True

  if position-1 >= 0 and not visited[position-1]:
    queue.append([position-1, time+1])
    visited[position-1] = True

  if position +1 <= 100000 and not visited[position+1]:
    queue.append([position+1, time+1])
    visited[position+1] = True
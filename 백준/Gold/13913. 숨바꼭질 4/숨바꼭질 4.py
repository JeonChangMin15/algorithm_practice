from collections import deque

start, end = list(map(int, input().split()))
queue = deque()
visited = [False]*100001
visited[start] = True

queue.append([start, 0, str(start)])

while len(queue):
  pos, time, route = queue.popleft()

  if pos == end:
    print(time)
    print(route)
    break

  if pos*2<=100000 and not visited[pos*2]:
    visited[pos*2] = True
    queue.append([pos*2, time+1, route+" "+str(pos*2)])

  if pos-1>=0 and not visited[pos-1]:
    visited[pos-1] = True
    queue.append([pos-1, time+1, route+" "+str(pos-1)])

  if pos+1<=100000 and not visited[pos+1]:
    visited[pos+1] = True
    queue.append([pos+1, time+1, route+" "+str(pos+1)])

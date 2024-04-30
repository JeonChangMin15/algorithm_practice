from collections import deque

start, end = list(map(int, input().split()))
visited = [float('inf')]*100001
visited[start] =0

queue =deque()
queue.append([start, 0])

minTime = float('inf')
cnt = 0

while len(queue):
  pos, curTime = queue.popleft()
  if curTime > minTime:
    break

  if pos == end:
    minTime = curTime
    cnt +=1

  if pos * 2 <= 100000 and curTime + 1 <= visited[pos*2]:
    queue.append([pos*2, curTime + 1])
    visited[pos*2] = curTime + 1

  if pos + 1 <= 100000 and curTime +1 <= visited[pos + 1]:
    queue.append([pos+1, curTime+1])
    visited[pos+1] = curTime + 1

  if pos - 1 >= 0 and curTime + 1 <= visited[pos-1]:
    queue.append([pos-1, curTime +1])
    visited[pos-1] = curTime +1

print(minTime)
print(cnt)
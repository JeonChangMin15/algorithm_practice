from collections import deque

# 첫번째줄에 시작점 도착점이 주어진다 1초후에 -+1, 두배 위치로 이동 가능하다
# bfs로 방문한 지점 마킹하면서 100000보다 작으면 된다

start, end = list(map(int, input().split()))

queue = deque()
queue.append([start, 0])
visited = [False]*(100001)

while len(queue):
  pos, cnt = queue.popleft()
  if pos == end:
    print(cnt)
    break
  
  if pos*2 <= 100000 and not visited[pos*2]:
    queue.append([pos*2, cnt +1])
    visited[pos*2] = True

  if pos - 1 >= 0 and not visited[pos-1]:
    queue.append([pos-1, cnt + 1])
    visited[pos-1] = True

  if pos + 1<= 100000 and not visited[pos + 1]:
    queue.append([pos+1, cnt + 1])
    visited[pos+1] = True

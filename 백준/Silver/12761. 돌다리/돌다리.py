from collections import deque

jumpA, jumpB, start, end  = list(map(int, input().split()))
visited = [False]*(100001)

queue = deque()
queue.append([start, 0])
visited[start] = True

while len(queue):
  pos, cnt = queue.popleft()
  if pos == end:
    print(cnt)
    break

  arr = [pos-1, pos+1, pos+jumpA, pos-jumpA, pos+jumpB, pos-jumpB, pos*jumpA, pos*jumpB]

  for nextPos in arr:
    if 0<=nextPos<=100000 and not visited[nextPos]:
      queue.append([nextPos, cnt+1])
      visited[nextPos] = True
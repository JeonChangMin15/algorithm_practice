from collections import deque

val1, val2 = list(map(int, input().split()))
stepArr = [0]*101

for i in range(val1):
  x, y = list(map(int, input().split())) 
  stepArr[x] = y

for i in range(val2):
  u, v = list(map(int, input().split()))
  stepArr[u] = v

visited = [float('inf')]*101
visited[1] = 0

queue = deque()
queue.append([1, 0])
dice = [1,2,3,4,5,6]

while len(queue):
  pos, cnt = queue.popleft()

  if pos == 100:
    visited[100] = min(visited[100], cnt)
    continue

  if stepArr[pos] != 0 and visited[stepArr[pos]] >= cnt:
    queue.append([stepArr[pos], cnt])
    visited[stepArr[pos]] = cnt
    continue

  for dx in dice:
    nextPos = pos + dx
    if nextPos <= 100 and stepArr[pos] == 0 and visited[nextPos] > cnt +1:
      queue.append([nextPos, cnt + 1])
      visited[nextPos] = cnt + 1

print(visited[100])
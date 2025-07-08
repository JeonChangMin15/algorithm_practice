from collections import deque

stairN, snakeN = list(map(int, input().split()))
stairPos = []
stairInfo = {}
snakePos = []
snakeInfo = {}

for i in range(stairN):
  s, e = map(int, input().split())
  stairPos.append(s)
  stairInfo[s] = e

for i in range(snakeN):
  s, e = map(int, input().split())
  snakePos.append(s)
  snakeInfo[s] = e

queue = deque()
queue.append([1, 0])
visited = [float('inf')]*101
visited[1] = 0
answer = float('inf')

while len(queue):
  pos, cnt = queue.popleft() 
  if pos == 100:
    answer = min(answer, cnt)

  if pos in stairPos and cnt <= visited[stairInfo[pos]]:
    queue.append([stairInfo[pos], cnt])
    visited[stairInfo[pos]] = cnt
    continue
  
  if pos in snakePos and cnt <= visited[snakeInfo[pos]]:
    queue.append([snakeInfo[pos], cnt])
    visited[snakeInfo[pos]] = cnt
    continue
  
  for i in range(1, 7):
    if i + pos <= 100 and cnt + 1 < visited[i+pos] and pos not in snakePos and pos not in stairPos:
      queue.append([i+pos, cnt + 1])
      visited[i+pos] = cnt + 1

print(answer)
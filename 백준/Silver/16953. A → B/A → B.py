from collections import deque

start, target = list(map(int, input().split()))
visited = []
queue =deque()
queue.append([start, 1])

answer = -1

while len(queue):
  value, temp = queue.popleft()
  if value == target:
    answer = temp
    break

  if value*2 <= 10**9 and value*2 not in visited:
    queue.append([value*2, temp+1])
    visited.append(value*2)

  if value*10+1 <= 10**9 and value*10+1 not in visited:
    queue.append([value*10+1, temp+1])
    visited.append(value*10+1)

print(answer)
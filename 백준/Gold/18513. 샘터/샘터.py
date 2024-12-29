from collections import deque
waterN, houseN = list(map(int, input().split()))
initial = list(map(int, input().split()))

queue = deque()
posSet = set()
for x in initial:
  queue.append([x, 0])
  posSet.add(x)

total = 0
cnt = 0
dirs = [-1, 1]

while len(queue):
  x, dist = queue.popleft()
  if dist > 0:
    total += dist
    cnt += 1

  if cnt == houseN:
    print(total)
    break
  
  for dx in dirs:
    nextX = x + dx
    if nextX not in posSet:
      queue.append([nextX, dist + 1])
      posSet.add(nextX)
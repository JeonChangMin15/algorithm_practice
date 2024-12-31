from collections import deque


rockN, maxHeight = list(map(int, input().split()))
coorSet = set()

for i in range(rockN):
  x, y  = list(map(int, input().split()))
  coorSet.add((x, y))

queue = deque()
queue.append((0,0,0))
answer = -1

while len(queue):
  x,y,cnt = queue.popleft()

  if y == maxHeight:
    answer = cnt
    break

  for dx in range(-2, 3):
    for dy in range(-2, 3):
      nextX = x + dx
      nextY = y + dy
      if (nextX, nextY) in coorSet:
        queue.append((nextX, nextY, cnt + 1))
        coorSet.remove((nextX, nextY))

print(answer)
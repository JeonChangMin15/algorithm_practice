from collections import deque
waterN, houseN = list(map(int, input().split()))
waterPos = list(map(int, input().split()))

posSet = set()
queue = deque()

for i in range(waterN):
  queue.append([waterPos[i], 0])
  posSet.add(waterPos[i])

dirs = [-1, 1]
answer = 0

while len(queue):
  pos, dist = queue.popleft()
  if len(posSet) >= houseN+waterN:
    break

  for dx in dirs:
    nextPos = pos + dx
    if nextPos not in posSet and len(posSet) < houseN+waterN:
      queue.append([nextPos, dist+1])
      posSet.add(nextPos)
      answer += dist+1

print(answer)
from collections import deque

n, jumpN = list(map(int, input().split()))

left = list(map(int, input()))
right = list(map(int, input()))
leftVisit = [False]*n
rightVisit = [False]*n

queue = deque()
queue.append([0, 0, 'left'])
leftVisit[0] = True

isSuccess = False

while len(queue):
  pos, time, side = queue.popleft()

  if pos +1 >= n or pos + jumpN >= n:
    isSuccess = True
    break

  if side == 'left':
    if pos-1>time and not leftVisit[pos-1] and left[pos-1]:
      queue.append([pos-1, time +1, 'left'])
      leftVisit[pos-1] = True

    if pos+1>time and pos+1 <n and not leftVisit[pos+1] and left[pos+1]:
      queue.append([pos+1, time+1, 'left'])
      leftVisit[pos+1] = True

    if pos+jumpN>time and pos+jumpN <n and not rightVisit[pos+ jumpN] and right[pos + jumpN]:
      queue.append([pos+jumpN, time+1, 'right'])
      rightVisit[pos+ jumpN] = True

  if side == 'right':
    if pos-1>time and not rightVisit[pos-1] and right[pos-1]:
      queue.append([pos-1, time +1, 'right'])
      rightVisit[pos-1] = True

    if pos+1>time and pos+1 <n and not rightVisit[pos+1] and right[pos+1]:
      queue.append([pos+1, time+1, 'right'])
      rightVisit[pos+1] = True

    if pos+jumpN>time and pos+jumpN <n and not leftVisit[pos+ jumpN] and left[pos + jumpN]:
      queue.append([pos+jumpN, time+1, 'left'])
      leftVisit[pos+ jumpN] = True

print(1 if isSuccess else 0)
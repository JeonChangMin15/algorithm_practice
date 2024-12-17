from collections import deque

n, k = list(map(int, input().split()))
left = list(map(int, input()))
right = list(map(int, input()))
leftVisit = [False]*n
rightVisit = [False]*n
leftVisit[0] = True

queue = deque()
queue.append([0,0,0])

answer = 0

while len(queue):
  pos, time, val = queue.popleft() 
  if pos >= n or pos+k >= n:
    answer = 1
    break

  if val == 0:
    if pos-1 > time and left[pos-1] == 1 and not leftVisit[pos-1]:
      queue.append([pos-1, time+1, 0])
      leftVisit[pos-1] = True
    if (pos+k < n and right[pos+k] == 1 and not rightVisit[pos+k]):
      queue.append([pos+k, time+1, 1])
      rightVisit[pos+k] = True
    if left[pos+1] == 1 and not leftVisit[pos+1]:
      queue.append([pos+1, time+1, 0])
      leftVisit[pos+1] = True

  
  if val == 1:
    if pos-1 > time and right[pos-1] == 1 and not rightVisit[pos-1]:
      queue.append([pos-1, time+1, 1])
      rightVisit[pos-1] = True
    if (pos +k < n and left[pos+k] == 1 and not leftVisit[pos+k]):
      queue.append([pos+k, time+1, 0])
      leftVisit[pos+k] = True
    if right[pos+1] == 1 and not rightVisit[pos+1]:
      queue.append([pos+1, time+1, 1])
      rightVisit[pos+1] = True

print(answer)

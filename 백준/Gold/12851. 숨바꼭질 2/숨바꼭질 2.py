from collections import deque

start, end = list(map(int,input().split()))
queue = deque()
queue.append([start, 0])

visited = [float('inf')]*100001
visited[start] = 0

answerTime = float('inf')
answerCnt = 0
while len(queue):
  curPos, curTime = queue.popleft()
  if curTime > answerTime:
    break
  if curPos == end:
    answerTime = curTime
    answerCnt += 1
    continue

  if curPos*2<=100000 and curTime+1 <= visited[curPos*2]:
    visited[curPos*2] = curTime + 1
    queue.append([curPos*2, curTime+1])

  if curPos+1<=100000 and curTime+1 <= visited[curPos+1]:
    visited[curPos+1] = curTime + 1
    queue.append([curPos+1, curTime+1])
  
  if curPos-1>=0 and curTime+1 <= visited[curPos-1]:
    visited[curPos-1] = curTime + 1
    queue.append([curPos-1, curTime+1])

print(answerTime)
print(answerCnt)
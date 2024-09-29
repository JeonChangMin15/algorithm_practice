from collections import deque

n = int(input())
arr = list(map(int, input().split()))
start = int(input())

queue = deque()
queue.append(start-1)
visited = [False]*(n)
visited[start-1] = True

while len(queue):
  curNode = queue.popleft()
  step = arr[curNode]

  if curNode - step >= 0 and not visited[curNode-step]:
    queue.append(curNode -step)
    visited[curNode-step] = True
  
  if curNode + step < n and not visited[curNode+step]:
    queue.append(curNode+step)
    visited[curNode+step] = True

answer = 0

for i in range(n):
  if visited[i]:
    answer += 1

print(answer)
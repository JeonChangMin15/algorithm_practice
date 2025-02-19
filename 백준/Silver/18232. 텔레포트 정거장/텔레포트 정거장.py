from collections import deque

nodeN, lineN = list(map(int, input().split()))
startNode, endNode = list(map(int, input().split()))
grid = [[] for _ in range(nodeN+1)]

for i in range(lineN):
  n1, n2 = map(int, input().split())
  grid[n1].append(n2)
  grid[n2].append(n1)

visited = [False]*(nodeN+1)
visited[startNode] = True
queue = deque()
queue.append([startNode, 0])

while len(queue):
  curNode, time = queue.popleft()

  if curNode == endNode:
    print(time)
    break

  if curNode-1 >=1 and not visited[curNode-1]:
    visited[curNode-1] = True
    queue.append([curNode-1, time+1])

  if curNode+1 <=nodeN and not visited[curNode+1]:
    visited[curNode+1] = True
    queue.append([curNode+1, time+1])

  for nextNode in grid[curNode]:
    if not visited[nextNode]:
      queue.append([nextNode, time+1])
      visited[nextNode] = True
from collections import deque

n = int(input())
grid = [[] for _ in range(n+1)]
for i in range(n-1):
  n1, n2 = map(int, input().split())
  grid[n1].append(n2)
  grid[n2].append(n1)

queue = deque()
queue.append(1)
visited  = [False]*(n+1)
visited[1] = True
answer = [0]*(n+1)

while len(queue):
  curNode = queue.popleft()

  for nextNode in grid[curNode]:
    if not visited[nextNode]:
      visited[nextNode] = True
      answer[nextNode] = curNode
      queue.append(nextNode)

print("\n".join(list(map(str, answer[2:]))))
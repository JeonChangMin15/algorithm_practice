from collections import deque

n, lineN, start = list(map(int, input().split()))
grid = [[] for _ in range(n+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  grid[n1].append(n2)
  grid[n2].append(n1)

for i in range(n+1):
  grid[i].sort()

dfsArr = []
dfsVisit = [False]*(n+1)

def dfs(node):
  dfsArr.append(node)
  dfsVisit[node] = True

  for nextNode in grid[node]:
    if dfsVisit[nextNode]:
      continue
    dfs(nextNode)

dfs(start)

bfsArr = []
bfsVisit = [False]*(n+1)
queue = deque()

bfsArr.append(start)
bfsVisit[start] = True
queue.append(start)

while len(queue):
  node = queue.popleft()

  for nextNode in grid[node]:
    if bfsVisit[nextNode]:
      continue
    bfsVisit[nextNode] = True
    bfsArr.append(nextNode)
    queue.append(nextNode)

print(" ".join(list(map(str, dfsArr))))
print(" ".join(list(map(str, bfsArr))))
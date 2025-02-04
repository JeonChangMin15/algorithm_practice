from collections import deque

nodeN, lineN = list(map(int, input().split()))
graph = [[] for _ in range(nodeN+1)]

for i in range(lineN):
  n1, n2 = map(int, input().split())
  graph[n2].append(n1)

def bfs(startNode):
  cnt = 1
  visited = [False]*(nodeN+1)
  visited[startNode] = True
  queue = deque()
  queue.append(startNode)

  while len(queue):
    curNode = queue.popleft()

    for nextNode in graph[curNode]:
      if visited[nextNode]:
        continue
      visited[nextNode] = True
      queue.append(nextNode)
      cnt += 1

  return cnt

nodeCnt = [0]*(nodeN+1)
for i in range(1, nodeN+1):
  nodeCnt[i] = bfs(i)

answer = []

for i in range(1, nodeN+1):
  if nodeCnt[i] == max(nodeCnt):
    answer.append(i)

print(" ".join(list(map(str, answer))))
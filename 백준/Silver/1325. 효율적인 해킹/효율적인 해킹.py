from collections import deque

computerN, lineN = list(map(int, input().split()))
graph = [[] for _ in range(computerN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n2].append(n1)

def bfs(startNode):
  queue = deque()
  visited = [False]*(computerN+1)
  visited[startNode] = True
  queue.append(startNode)
  cnt =1 

  while len(queue):
    curNode = queue.popleft()

    for nextNode in graph[curNode]:
      if visited[nextNode]:
        continue
      visited[nextNode] = True
      queue.append(nextNode)
      cnt += 1

  return cnt

maxVal = 0
arr = []

for i in range(1, computerN+1):
  n = bfs(i)

  if n >= maxVal:
    maxVal = n
    arr.append([i, n])

answer = []

for index, val in arr:
  if val == maxVal:
    answer.append(index)

print(" ".join(list(map(str, answer))))
    
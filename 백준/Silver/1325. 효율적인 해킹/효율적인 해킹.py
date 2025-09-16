from collections import deque

computerN, lineN = list(map(int,input().split()))
graph = [[] for _ in range(computerN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  graph[n2].append(n1)

def bfs(startNode):
  queue = deque()
  queue.append(startNode)
  visited = [False]*(computerN+1)
  visited[startNode] = True

  while len(queue):
    curNode = queue.popleft()

    for nextNode in graph[curNode]:
      if visited[nextNode]:
        continue
      queue.append(nextNode)
      visited[nextNode] = True

  return len(list(filter(lambda x: x==True, visited)))

arr = [0]*(computerN+1)
for i in range(1, computerN+1):
  val = bfs(i)
  arr[i] = val

maxVal = max(arr)
answer = []

for i in range(1, computerN+1):
  if arr[i] == maxVal:
    answer.append(str(i))

print(" ".join(answer))
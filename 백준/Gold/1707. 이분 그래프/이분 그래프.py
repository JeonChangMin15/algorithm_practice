from collections import deque

testN = int(input())

def bfs():
  global answer
  nodeN, lineN = map(int, input().split())
  graph = [[] for _ in range(nodeN+1)]
  answer = 'YES'

  for _ in range(lineN):
    n1, n2 = map(int, input().split())
    graph[n1].append(n2)
    graph[n2].append(n1)

  visited = [-1]*(nodeN+1)

  for i in range(1, nodeN+1):
    if visited[i] != -1:
      continue
    visited[i] = 0
    queue = deque()
    queue.append([i, 0])

    while len(queue): 
      node, color = queue.popleft()
      for nextNode in graph[node]:
        if visited[nextNode] == -1:
          nextColor = 0 if color == 1 else 1
          queue.append([nextNode, nextColor])
          visited[nextNode] = nextColor
        else:
          if visited[nextNode] == color:
            answer = 'NO'
            break
  
  print(answer)


for _ in range(testN):
  bfs()
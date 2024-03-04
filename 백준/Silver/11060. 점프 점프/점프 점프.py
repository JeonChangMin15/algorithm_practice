n = int(input())
arr = list(map(int, input().split()))

visited = [False] * n
queue = [[0,0, arr[0]]]

visited[0] = True

answer = -1

while len(queue) > 0:
  pos, step, maxStep = queue.pop(0)
  if pos == n-1:
    answer = step
    break

  for i in range(1, maxStep+1):
    if pos + i >=n or visited[pos + i] == True:
      continue
    queue.append([pos + i, step+1, arr[pos + i]])
    visited[pos + i] = True

print(answer)
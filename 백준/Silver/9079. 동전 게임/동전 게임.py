from collections import deque
testN = int(input())
action = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

def bfs():
  global answer
  grid = ''
  for _ in range(3):
    s1,s2,s3 = map(str, input().split())
    grid += s1+s2+s3
    
  queue = deque()
  record = set()
  record.add(grid)
  queue.append([grid, 0])

  answer = -1
  while len(queue):
    curGrid, cnt = queue.popleft()
    if all(s == 'H' for s in curGrid) or all(s =='T' for s in curGrid):
      answer = cnt
      break

    for ac in action:
      s = ''
      for i in range(9):
        if i not in ac:
          s += curGrid[i]
        else:
          s += 'H' if curGrid[i] == 'T' else 'T'
      if s not in record:
        record.add(s)
        queue.append([s, cnt + 1])

  print(answer)
  return

for _ in range(testN):
  bfs()
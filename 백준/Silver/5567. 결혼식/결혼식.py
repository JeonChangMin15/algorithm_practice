# 1부터 N명의 사람들중에서 친구와 친구의 친구까지 초대한다
# 첫째줄에 동기수 둘째줄에 리스트이 길이 그다음줄 부터 관계가 주어진다
# 초대할 동기수를 구해라
# bfs로 [1, 0]부터 시작해서 관계값이 2보다 크면 break하면된다
from collections import deque

peopleN = int(input())
relationN = int(input())
grid = [[] for _ in range(peopleN+1)]

for i in range(relationN):
  n1, n2 = list(map(int, input().split()))
  grid[n1].append(n2)
  grid[n2].append(n1)

queue = deque()
queue.append([1, 0])
peopleDist = [float('inf')]*(peopleN+1)
peopleDist[1] = 0
answer = 0 

while len(queue):
  person, dist = queue.popleft()
  if dist > 2:
    break

  if 1<=dist<=2:
    answer += 1

  for nextPerson in grid[person]:
    if peopleDist[nextPerson] > dist+1:
      peopleDist[nextPerson] = dist + 1
      queue.append([nextPerson, dist + 1])

print(answer)
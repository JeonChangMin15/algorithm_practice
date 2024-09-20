from collections import deque

# 두개의 문자열이 주어졌을때 첫번째 문자열을 두번째 문자열 바꿀 수 있는지 확인
# 문자열의 뒤에 A를 추가 or 문자열뒤 B를 추가하고 뒤집는다
# 주어진 조건을 이용해서 만들 수 있는지 알아낸다
# 모든 케이스를 다 bfs로 체크하면 2**50이고 
# 역으로 가능한 케이스면 추적하면된다
# 1. 가장 마지막 문자열이 A이면 제외한다
# 2. 맨앞에 문자열이 B이면 문자열을 뒤집고 B를 제외한다

start = input()
end = input()

queue = deque()
queue.append(end)

answer = 0

while len(queue):
  target = queue.popleft()

  if len(target) == len(start) and target == start:
    answer += 1
    break

  if target[-1] == 'A' and len(target) > len(start):
    queue.append(target[:len(target)-1])

  if target[0] == 'B' and len(target) > len(start):
    queue.append(target[::-1][:len(target)-1])

print(answer)